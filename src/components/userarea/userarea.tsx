import { Button, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Survey } from '../../model/survey'
import { SurveyEntry } from '../../model/surveyEntry'
import { FirebaseService } from '../../services/firebase.service'
import { NavigationProps } from '../app'
import ParticipationInputView from './participationInputView'
import ResultView from './resultView'

export interface SurveyEntryBasedComponentProps {
    surveyEntry: SurveyEntry
}

export const UserArea = (props: NavigationProps): JSX.Element => {
    const { surveyId } = useParams()
    const [survey, setSurvey] = React.useState(new Survey())

    const service = new FirebaseService()
    service.initFirebase()
    service.getSurveyWithId(surveyId!).then(setSurvey)

    let surveyEntryIndex = 0
    let surveyEntry = survey.surveyEntries[surveyEntryIndex]
    if (surveyEntry == null) {
        surveyEntry = new SurveyEntry()
    }
    let CurrentComponent = ParticipationInputView

    const clickNextEntry = (event: any): void => {
        surveyEntryIndex++
        surveyEntry = survey.surveyEntries[surveyEntryIndex]
    }
    
    const clickShowResult = (event: any): void => {
        if (CurrentComponent === ResultView) {
            CurrentComponent = ParticipationInputView
        } else {
            CurrentComponent = ResultView
        }
    }

    return (
        <div>
            <Typography gutterBottom variant="h3" component="div">
                {survey.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {surveyEntryIndex}. {surveyEntry.question}
            </Typography>
            <CurrentComponent surveyEntry={surveyEntry}></CurrentComponent>
            <div style={{position: 'fixed', bottom: 0, left: 20, right: 20, height: 125}}>
                <Button
                    onClick={clickShowResult}
                    variant="contained">
                        Ergebnisse anzeigen
                </Button>
                <Button
                    style={{float: 'right'}}
                    onClick={clickNextEntry}
                    variant="contained">
                        Weiter
                </Button>
            </div>
        </div>
        
    )
}

export default UserArea
