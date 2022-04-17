import { NavigationProps } from 'components/appRouter'
import { Button, Typography } from '@mui/material'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { SurveyEntry } from 'model/surveyEntry'
import { injectClause, StoreProps } from 'stores/storeHelper'
import ResultView from './resultView'

export const ResultArea = (props: NavigationProps & StoreProps): JSX.Element => {
    const { surveyId } = useParams()

    React.useEffect(() => {
        props.uiStore!.watchSurvey(surveyId!)
    }, []) // empty array so it is called only once.
    const survey = props.uiStore!.currentSurvey

    const [surveyEntryIndex, setSurveyEntryIndex] = React.useState(0)
    const [surveyEntry, setSurveyEntry] = React.useState(new SurveyEntry())
    
    React.useEffect(() => {
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
    })

    const clickPreviousEntry = (event: any): void => {
        setSurveyEntryIndex(surveyEntryIndex - 1)
        const surveyStart = surveyEntryIndex <= 0
        if (surveyStart) {
            return
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
    }

    const clickNextEntry = (event: any): void => {
        setSurveyEntryIndex(surveyEntryIndex + 1)
        const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1
        if (surveyFinished) {
            return
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
    }

    if (surveyEntry == null) {
        return (
            <Typography style={{textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%'}} gutterBottom variant="h3" component="div">
                Daten werden geladen..
            </Typography>
        )
    }
    return (
        <div style={{width: '800px', margin: 'auto'}}>
            <Typography gutterBottom variant="h3" component="div">
                {survey.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {surveyEntryIndex+1}. {surveyEntry.question}
            </Typography>
            <ResultView surveyEntry={surveyEntry}/>
            <div style={{position: 'fixed', bottom: 0, left: 20, right: 20, height: 125}}>
                <Button
                    onClick={clickPreviousEntry}
                    variant="contained">
                        Zurück
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

export default inject(...injectClause)(observer(ResultArea))