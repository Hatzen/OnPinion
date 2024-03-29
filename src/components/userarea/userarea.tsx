import { NavigationProps } from 'components/appRouter'
import { Button, Typography } from '@mui/material'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { SurveyAnswer } from 'model/surveyAnswer'
import { SurveyChoices } from 'model/surveyChoices'
import { SurveyEntry } from 'model/surveyEntry'
import { injectClause, StoreProps } from 'stores/storeHelper'
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
    const survey = props.uiStore!.currentSurvey
    let currentAnswer: Array<SurveyAnswer> = []

    const [surveyEntryIndex, setSurveyEntryIndex] = React.useState(0)
    const [surveyEntry, setSurveyEntry] = React.useState(new SurveyEntry())
    
    React.useEffect(() => {
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
    })

    const [showResult, setShowResult] = React.useState(false)

    const clickNextEntry = (event: any): void => {
        currentAnswer.forEach(answer =>
            props.uiStore!.addAnswer(surveyEntry, answer)
        )
        setSurveyEntryIndex(surveyEntryIndex + 1)
        const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1
        if (surveyFinished) {
            return
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex])
        currentAnswer = []
    }
    
    const clickShowResult = (event: any): void => {
        setShowResult(!showResult)
    }

    const setAnswer = (surveyAnswer: SurveyAnswer): void => {
        if (surveyEntry.surveyChoices === SurveyChoices.SINGLESELECT) {
            currentAnswer = [surveyAnswer]
        } else if (surveyEntry.surveyChoices === SurveyChoices.MULTISELECT) {
            currentAnswer.push(surveyAnswer)
        }
    }
    if (surveyEntry == null) {
        return (
            <Typography style={{textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%'}} gutterBottom variant="h3" component="div">
                Daten werden geladen..
            </Typography>
        )
    }
    const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1
    if (surveyFinished) {
        return (
            <div style={{textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%'}} >
                <Typography gutterBottom variant="h3" component="div">
                                Vielen Dank für die Teilnahme.
                </Typography>
                <Button
                    style={{float: 'right'}}
                    onClick={() => props.navigate('/result/' + surveyId)}
                    variant="contained">
                        Ergebnisse Anzeigen
                </Button>
            </div>
        )
    }
    let content = <ParticipationInputView setAnswer={setAnswer} surveyEntry={surveyEntry}/>
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