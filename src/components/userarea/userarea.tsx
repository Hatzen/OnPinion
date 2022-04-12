import { Button, Typography } from '@mui/material'
import { observe } from 'mobx'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { SurveyEntry } from '../../model/surveyEntry'
import { injectClause, StoreProps } from '../../stores/storeHelper'
import { NavigationProps } from '../app'
import ParticipationInputView from './participationInputView'
import ResultView from './resultView'

export interface SurveyEntryBasedComponentProps {
    surveyEntry: SurveyEntry
}

export const UserArea = (props: NavigationProps & StoreProps): JSX.Element => {
    const { surveyId } = useParams()

    React.useEffect(() => {
        props.uiStore!.watchSurvey(surveyId!)
    }, []) // empty array so it is called only once.
    // TODO: As it is from the store we usually wont need the useStat hook, do we?
    // const [survey, setSurvey] = React.useState(props.uiStore!.currentSurvey)
    const survey = props.uiStore!.currentSurvey

    const [surveyEntryIndex, setSurveyEntryIndex] = React.useState(0)
    const [surveyEntry, setSurveyEntry] = React.useState(new SurveyEntry())
    
    React.useEffect(() => {
        setSurveyEntry(props.uiStore!.currentSurvey.surveyEntries[surveyEntryIndex])

        // observe(survey, (change) => {
        //    setSurvey(change.object)
        //})
    })

    const [showResult, setShowResult] = React.useState(false)

    const clickNextEntry = (event: any): void => {
        setSurveyEntryIndex(surveyEntryIndex + 1)
        if (surveyEntryIndex >= survey.surveyEntries.length) {
            return
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
    }
    
    const clickShowResult = (event: any): void => {
        setShowResult(!showResult)
    }
    
    if (surveyEntryIndex >= survey.surveyEntries.length || surveyEntry == null) {
        return (
            <Typography style={{textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%'}} gutterBottom variant="h3" component="div">
                Vielen Dank für die Teilnahme.
            </Typography>
        )
    }
    let content = <ParticipationInputView surveyEntry={surveyEntry}/>
    if (showResult) {
        content = <ResultView surveyEntry={surveyEntry}/>
    }

    return (
        <div style={{width: '800px', margin: 'auto'}}>
            <Typography gutterBottom variant="h3" component="div">
                {survey.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {surveyEntryIndex+1}. {surveyEntry.question}
            </Typography>
            {content}
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

export default inject(...injectClause)(observer(UserArea))