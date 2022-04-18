import * as React from 'react'
import { Button, Checkbox, FormControlLabel, FormGroup} from '@mui/material'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { inject, observer } from 'mobx-react'
import { injectClause, StoreProps } from 'stores/storeHelper'
import { NavigationProps } from 'components/appRouter'

export const ManageShowView = (props: StoreProps & NavigationProps): JSX.Element => {
    const { surveyId } = useParams()
    
    React.useEffect(() => {
        props.uiStore!.loadSurvey(surveyId!)
    })
    const survey = props.uiStore!.currentSurvey
    

    const createdAtFormatted = moment(survey.createdAt).format()
    return (
        <div>
            <FormGroup>
                Name: {survey.name} <br />
                Umfrage-Code: {survey.id} <br />
                Teilnehmer bisher: {survey.participations} <br />
                Anzahl fragen: {survey.surveyEntries?.length} <br />
                Erstellt am: {createdAtFormatted} <br />
                <br /><br />
                
                <Button
                    style={{float: 'right'}}
                    onClick={() => props.navigate('/result/' + surveyId)}
                    variant="contained">
                        Ergebnisse Anzeigen
                </Button>


                <FormControlLabel disabled control={<Checkbox disabled/>} label="Umfrage schließen" />
            </FormGroup>
        </div>
    )
}

export default inject(...injectClause)(observer(ManageShowView))