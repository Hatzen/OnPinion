import { Button, FormControl, Input, InputLabel, List, ListItem, ListItemText, MenuItem, Select } from '@mui/material'
import * as React from 'react'
import { GraphType } from '../../../model/graphType'
import { SurveyChoices } from '../../../model/surveyChoices'
import { SurveyChoice, SurveyEntry } from '../../../model/surveyEntry'
import CreateSurveyChoice from './createChoice'

interface CreateSurveyEntryProps {
    surveyEntry: SurveyEntry
    deleteEntryAction: (surveyEntry: SurveyEntry) => void
}

export const CreateSurveyEntry = (props: CreateSurveyEntryProps): JSX.Element => {
    const [surveyEntry] = React.useState(props.surveyEntry)
    const [choices, setChoices] = React.useState(surveyEntry.choices)

    let choicesCount = 1

    const createSurveyChoice = (): SurveyChoice => {
        const choice = new SurveyChoice()
        choice.id = 'surveyChoice-' + ++choicesCount
        return choice
    }
    
    const addSurveyChoice = (): void => {
        const tmpChoices = choices.concat(createSurveyChoice())
        setChoices(tmpChoices)
        surveyEntry.choices = tmpChoices
    }

    const removeSurveyChoiceComponent = (surveyChoice: SurveyChoice): void => {
        // TODO: This does not set the attribute of surveyEntry, does it?
        const tmpChoices = choices.filter(entry => entry !== surveyChoice)
        setChoices(tmpChoices)
        surveyEntry.choices = tmpChoices
    }

    return (
        <div>
            <ListItem style={{display: 'block', padding: '20px'}} divider>
                <Button
                    onClick={() => {
                        props.deleteEntryAction(surveyEntry)}
                    }
                    style={{float: 'right'}}
                    variant='text'>X</Button>
                <FormControl  style={{marginBottom: '20px'}} fullWidth>
                    <InputLabel id="question">Überschrift:</InputLabel>
                    <Input id="question-input"
                        onChange={(event) => surveyEntry.question = event.target.value} />
                    
                </FormControl>
                <FormControl style={{marginBottom: '20px'}} fullWidth>
                    <InputLabel id="graph-type">Umfragetyp</InputLabel>
                    <Select
                        labelId="graph-type"
                        id="graph-type-select"
                        label="Umfragetyp"
                        onChange={(event) => surveyEntry.graphType = event.target.value as GraphType}>
                        <MenuItem value={GraphType.BAR}>Balken</MenuItem>
                        <MenuItem value={GraphType.RADAR}>Trapez</MenuItem>
                        <MenuItem value={GraphType.TEXT}>Text</MenuItem>
                        <MenuItem disabled value={'Plot'}>Graph</MenuItem> [User can enter 2D Values like year and value]
                        <MenuItem disabled>Kalender</MenuItem>
                        <MenuItem disabled>Multimedia</MenuItem>
                    </Select>
                </FormControl>

                <FormControl style={{marginBottom: '20px'}} fullWidth>
                    <InputLabel id="choice-type">Auswahlmöglichkeiten</InputLabel>
                    <Select
                        labelId='choice-type'
                        label="Auswahltyp"
                        onChange={(event) => surveyEntry.surveyChoices = event.target.value as SurveyChoices}>
                        <MenuItem value={SurveyChoices.MULTISELECT}>Mehrfach</MenuItem>
                        <MenuItem value={SurveyChoices.SINGLESELECT}>Eine Option</MenuItem>
                        <MenuItem value={SurveyChoices.PRIORITY}>Priorisieren</MenuItem>
                    </Select>
                </FormControl>

                
                <List>
                    {
                        choices.map(entry => {
                            return (<CreateSurveyChoice
                                surveyChoice={entry}
                                deleteEntryAction={removeSurveyChoiceComponent}
                                key={'choice-' + entry.id} />)
                        })
                    }
                    <ListItem divider onClick={addSurveyChoice}>
                        <ListItemText primary="+ Antwort hinzufügen" />
                    </ListItem>
                </List>
            </ListItem>
        </div>
    )
}

export default CreateSurveyEntry