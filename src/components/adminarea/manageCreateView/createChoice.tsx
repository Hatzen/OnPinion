import { Button, FormControl, Input, InputLabel, ListItem } from '@mui/material'
import * as React from 'react'
import { SurveyChoice } from 'model/surveyEntry'

interface CreateSurveyChoiceProps {
    surveyChoice: SurveyChoice
    deleteEntryAction: (surveyChoice: SurveyChoice) => void
}

export const CreateSurveyChoice = (props: CreateSurveyChoiceProps): JSX.Element => {
    const surveyChoice = props.surveyChoice
    
    return (
        <div>
            <ListItem style={{paddingLeft: '50px'}} divider>
                <Button
                    onClick={() => {
                        props.deleteEntryAction(surveyChoice)}
                    }
                    style={{float: 'right'}}
                    variant='text'>X</Button>
                <FormControl  style={{marginBottom: '20px'}} fullWidth>
                    <InputLabel id="choice-text">Überschrift:</InputLabel>
                    <Input id="choice-text"
                        onChange={(event) => {
                            surveyChoice.text = event.target.value
                        }} />
                    
                </FormControl>
            </ListItem>
        </div>
    )
}

export default CreateSurveyChoice