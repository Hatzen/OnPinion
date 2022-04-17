import * as React from 'react'
import { SurveyEntryBasedComponentProps } from './userarea'
import { SurveyChoices } from '@model/surveyChoices'
import { GraphType } from '@model/graphType'
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material'
import { SurveyAnswer } from '@model/surveyAnswer'
import { injectClause, StoreProps } from '@stores/storeHelper'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

interface ParticipationInputViewProps extends SurveyEntryBasedComponentProps, StoreProps {
    setAnswer: (answer: SurveyAnswer) => void
}

export const ParticipationInputView = (props: ParticipationInputViewProps): JSX.Element => {
    const [surveyEntry, setSurveyEntry] = React.useState(props.surveyEntry)
    // Keep prop synced. https://stackoverflow.com/a/54568167/8524651
    React.useEffect(() => { setSurveyEntry(props.surveyEntry) }, [props.surveyEntry])

    const answer = new SurveyAnswer()

    const handleChange = (event: any): void => {
        const choiceId = event.target.value
        answer.id = 'dummyId'
        answer.value = null
        answer.choice = choiceId
        answer.user = props.uiStore!.userId!
        props.setAnswer(answer)
    }
    
    // https://stackoverflow.com/a/44078785/8524651
    const generateUUID = (): string => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2)
    }

    let textArea = (<div></div>)
    let radioGroup = (<div></div>)
    if (surveyEntry.graphType === GraphType.TEXT) {
        textArea = (<TextareaAutosize
            style={{width: 500, height: 200}}
            onChange={handleChange}
            minRows={5}
            placeholder="Hier den Text eingeben.."/>)
    } else {
        radioGroup = (<RadioGroup>
            {
                surveyEntry.choices?.map(choice => {
                    const key = 'input-field-' + surveyEntry.choices.indexOf(choice) + surveyEntry.question + generateUUID() + Math.random()
                    if (surveyEntry.surveyChoices === SurveyChoices.SINGLESELECT) {
                        return <FormControlLabel key={key} onChange={handleChange} value={choice.id} control={<Radio />} label={choice.text} />
                    } else if (surveyEntry.surveyChoices === SurveyChoices.MULTISELECT) {
                        return <FormControlLabel key={key} onChange={handleChange} value={choice.id} control={<Checkbox />} label={choice.text} />
                    }
                })
            }
        </RadioGroup>)
    }
    
    return (
        <div style={{minHeight: '500px', display: 'block'}}>
            {textArea}
            {radioGroup}
        </div>
    )
}

export default inject(...injectClause)(observer(ParticipationInputView))