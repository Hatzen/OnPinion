import * as React from 'react'
import { SurveyEntryBasedComponentProps } from './userarea'
import { SurveyChoices } from '../../model/surveyChoices'
import { GraphType } from '../../model/graphType'
import { Checkbox, FormControlLabel, Radio, TextareaAutosize } from '@mui/material'
import { SurveyAnswer } from '../../model/surveyAnswer'

export const ParticipationInputView = (props: SurveyEntryBasedComponentProps): JSX.Element => {
    const surveyEntry = props.surveyEntry

    const handleChange = (event: any): void => {
        // TODO: and pass the values back to parent component. Problem: How to handle UNDO selection?
        const answer = new SurveyAnswer()
        answer.choice = '123' // TODO: get choice from event
        answer.user = '' // TODO: get user.
    }

    return (
        <div>
            {
                surveyEntry.choices.map(choice => {
                    if (surveyEntry.surveyChoices === SurveyChoices.SINGLESELECT) {
                        return <FormControlLabel onChange={handleChange} value={choice.id} control={<Checkbox />} label={choice.text} />
                    } else if (surveyEntry.surveyChoices === SurveyChoices.MULTISELECT) {
                        return <FormControlLabel onChange={handleChange} value={choice.id} control={<Radio />} label={choice.text} />
                    } else if (surveyEntry.graphType === GraphType.TEXT) {
                        return (<TextareaAutosize onChange={handleChange} ></TextareaAutosize>)
                    }
                })
            }
        </div>
    )
}

export default ParticipationInputView