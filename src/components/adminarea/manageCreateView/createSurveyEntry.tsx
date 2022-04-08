import { FormControl, Input, InputLabel, ListItem, MenuItem, Select } from '@mui/material'
import * as React from 'react'
import { GraphType } from '../../../model/graphType'
import { SurveyChoices } from '../../../model/surveyChoices'
import { SurveyEntry } from '../../../model/surveyEntry'

export const CreateSurveyEntry = (): JSX.Element => {
    const surveyEntry = new SurveyEntry()
    
    return (
        <div>
            <ListItem divider>
                <FormControl fullWidth>
                    <InputLabel  id="question">Überschrift:</InputLabel>
                    <Input
                        id="question-input"
                        onChange={(event) => surveyEntry.question = event.target.value} />
                    
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

                    <InputLabel>Auswahlmöglichkeiten</InputLabel>
                    <Select
                        label="Auswahltyp"
                        value={SurveyChoices.SINGLESELECT}
                        onChange={(event) => surveyEntry.surveyChoices = event.target.value as SurveyChoices}>
                        <MenuItem value={SurveyChoices.MULTISELECT}>Mehrfach</MenuItem>
                        <MenuItem value={SurveyChoices.SINGLESELECT}>Eine Option</MenuItem>
                        <MenuItem value={SurveyChoices.PRIORITY}>Priorisieren</MenuItem>
                    </Select>

                </FormControl>
            </ListItem>
        </div>
    )
}

export default CreateSurveyEntry