import * as React from 'react'
import { SurveyEntryBasedComponentProps } from './userarea'
import { SurveyChoices } from '../../model/surveyChoices'
import { GraphType } from '../../model/graphType'
import { Checkbox, FormControlLabel, Radio, TextareaAutosize } from '@mui/material'
import { SurveyAnswer } from '../../model/surveyAnswer'
import { injectClause, StoreProps } from '../../stores/storeHelper'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

export const ParticipationInputView = (props: SurveyEntryBasedComponentProps & StoreProps): JSX.Element => {
    const surveyEntry = props.surveyEntry

    const handleChange = (event: any): void => {
        // TODO: and pass the values back to parent component. Problem: How to handle UNDO selection?
        const choiceId = event.target.value
        const answer = new SurveyAnswer()
        answer.id = 'dummyId'
        answer.value = null
        answer.choice = choiceId
        answer.user = props.uiStore!.userId! // TODO: Check that it is filled.
        props.uiStore!.addAnswer(surveyEntry, answer)
    }

    return (
        <div style={{display: 'block'}}>
            {
                surveyEntry.choices.map(choice => {
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
        </div>
    )
}

export default inject(...injectClause)(observer(ParticipationInputView))