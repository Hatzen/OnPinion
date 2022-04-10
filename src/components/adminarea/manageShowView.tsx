import * as React from 'react'
import { Checkbox, FormControlLabel, FormGroup} from '@mui/material'
import { Survey } from '../../model/survey'
import { FirebaseService } from '../../services/firebase.service'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export const ManageShowView = (): JSX.Element => {
    const { surveyId } = useParams()
    const [survey, setSurvey] = React.useState(new Survey())

    const service = new FirebaseService()
    service.initFirebase()
    service.getSurveyWithId(surveyId!).then(setSurvey)

    const createdAtFormatted = moment(survey.createdAt).format()
    return (
        <div>
            <FormGroup>
                Name: {survey.name} <br />
                Umfrage-Code: {survey.id} <br />
                Teilnehmer bisher: {survey.participations} <br />
                Anzahl fragen: {survey.surveyEntries?.length} <br />
                Erstellt am: {createdAtFormatted} <br />

                <FormControlLabel disabled control={<Checkbox disabled/>} label="Umfrage schließen" />
            </FormGroup>
        </div>
    )
}

export default ManageShowView