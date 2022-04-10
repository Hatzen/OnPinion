import * as React from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, List, ListItem, ListItemText, Snackbar } from '@mui/material'
import CreateSurveyEntry from './createSurveyEntry'
import { SurveyEntry } from '../../../model/surveyEntry'
import { Survey } from '../../../model/survey'
import { FirebaseService } from '../../../services/firebase.service'

export const ManageCreateView = (): JSX.Element => {
    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState('')
    const [survey] = React.useState(new Survey())
    const [surveyEntries, setSurveyEntries] = React.useState(new Array<SurveyEntry>(new SurveyEntry()))
    survey.canSeeResult = true
    survey.canSkip = true
    survey.isClosed = false
    survey.createdAt = new Date().getTime()

    const addSurveyEntryComponent = (surveyEntry: SurveyEntry): void => {
        setSurveyEntries(surveyEntries.concat(surveyEntry))
    }
    
    const removeSurveyEntryComponent = (surveyEntry: SurveyEntry): void => {
        setSurveyEntries(surveyEntries.filter(entry => entry !== surveyEntry))
    }

    const handleClick = (): void => {
        const valid = surveyEntries.find(entry => entry.isValid !== true) == null
        if (!valid && survey.name != null && survey.name.length !== 0 && surveyEntries.length > 0) {
            setText('Bitte fehlende Werte ergänzen.')
            setOpen(true)
            return
        }
        survey.surveyEntries = surveyEntries

        const service = new FirebaseService()
        service.initFirebase()
        service.addSurvey(survey)

        setText('Umfrage erfolgeich erstellt.')
        setOpen(true)
    }
  
    const action = (
        <React.Fragment>
            <Button color='secondary' size='small' onClick={() => setOpen(false)}>
                Close
            </Button>
        </React.Fragment>
    )

    // [<Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />]
    return (
        <div>
            <FormControl  style={{marginBottom: '20px'}} fullWidth>
                <InputLabel id="survey-title">Überschrift:</InputLabel>
                <Input id="survey-title"
                    onChange={(event) => survey.name = event.target.value} />
                
            </FormControl>
            <FormGroup>
                <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Überspringen erlauben" />
                <FormControlLabel disabled control={<Checkbox defaultChecked/>} label="Ergebnisse Sichtbar" />
            </FormGroup>

            <List>
                {
                    surveyEntries.map(entry => {
                        return (<CreateSurveyEntry
                            surveyEntry={entry}
                            deleteEntryAction={removeSurveyEntryComponent}
                            key={'entry-' + surveyEntries.indexOf(entry)} />)
                    })
                }
                <ListItem divider onClick={(event) => addSurveyEntryComponent(new SurveyEntry())}>
                    <ListItemText primary="+ Frage hinzufügen" />
                </ListItem>
            </List>
            
            <Button variant='contained' onClick={handleClick}>Speichern</Button>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message={text}
                action={action}
            />
        </div>
    )
}

export default ManageCreateView