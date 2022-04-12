import * as React from 'react'
import { SurveyEntryBasedComponentProps } from './userarea'
import { SurveyChoices } from '../../model/surveyChoices'
import { GraphType } from '../../model/graphType'
import { Checkbox, FormControlLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material'
import { SurveyAnswer } from '../../model/surveyAnswer'
import { injectClause, StoreProps } from '../../stores/storeHelper'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

interface ParticipationInputViewProps extends SurveyEntryBasedComponentProps, StoreProps {
    setAnswer: (answer: SurveyAnswer) => void
}

export const ParticipationInputView = (props: ParticipationInputViewProps): JSX.Element => {
    const surveyEntry = props.surveyEntry
    const answer = new SurveyAnswer()

    const handleChange = (event: any): void => {
        const choiceId = event.target.value
        answer.id = 'dummyId'
        answer.value = null
        answer.choice = choiceId
        answer.user = props.uiStore!.userId!
        props.setAnswer(answer)
    }

    return (
        <div style={{minHeight: '500px', display: 'block'}}>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {
                    surveyEntry.choices?.map(choice => {
                        const key = 'input-field-' + surveyEntry.choices.indexOf(choice)
                        if (surveyEntry.surveyChoices === SurveyChoices.SINGLESELECT) {
                            return <FormControlLabel key={key} onChange={handleChange} value={choice.id} control={<Checkbox />} label={choice.text} />
                        } else if (surveyEntry.surveyChoices === SurveyChoices.MULTISELECT) {
                            return <FormControlLabel key={key} onChange={handleChange} value={choice.id} control={<Radio />} label={choice.text} />
                        } else if (surveyEntry.graphType === GraphType.TEXT) {
                            return (<TextareaAutosize onChange={handleChange} ></TextareaAutosize>)
                        }
                    })
                }
            </RadioGroup>
        </div>
    )
}

export default inject(...injectClause)(observer(ParticipationInputView))