import { Grid } from '@mui/material'
import React from 'react'
import { Survey } from '../../model/survey'
import { FirebaseService } from '../../services/firebase.service'
import AddCard from './addCard'
import SurveyCard from './surveyCard'
import { NavigationProps } from '../app'

const AdminArea = (props: NavigationProps): JSX.Element => {
    const [surveys, setSurveys] = React.useState(new Array<Survey>())

    const service = new FirebaseService()
    service.initFirebase()
    service.getSurveys().then(setSurveys)

    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {surveys.map((element, index) => (
                    <Grid item xs={2} sm={2} md={2} key={index}>
                        <SurveyCard entry={element} navigate={props.navigate}/>
                    </Grid>
                ))}
                <Grid item xs={2} sm={2} md={2}>
                    <AddCard navigate={props.navigate}/>
                </Grid>
            </Grid>
        </div>
    )
}

export class SurveyEntry {
    id!: string
    name!: string
    participationcount!: number
}

export default AdminArea
