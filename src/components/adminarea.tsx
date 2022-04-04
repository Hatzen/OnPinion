import { Grid } from '@mui/material'
import React from 'react'
import AddCard from './adminarea/addCard'
import SurveyCard from './adminarea/surveyCard'
import { NavigationProps } from './app'

const AdminArea = (props: NavigationProps): JSX.Element => {
    const surveyData: SurveyEntry[] = [
        {
            id: 'asjaaknaflaxxvhwekspsjhfmclk',
            name: 'Zufriedenheit',
            participationcount: 6
        },
        {
            id: 'asjaak1xvhweks5psjhfmclk',
            name: 'News@4E',
            participationcount: 124
        },
        {
            id: 'xgraxxvhwekspsjhfmclk',
            name: 'Mitarbeiter Gehaltsverhandlung',
            participationcount: 0
        }
    ]


    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {surveyData.map((element, index) => (
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
