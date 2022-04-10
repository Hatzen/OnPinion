import { Grid } from '@mui/material'
import React from 'react'
import { Survey } from '../../model/survey'
import AddCard from './addCard'
import SurveyCard from './surveyCard'
import { NavigationProps } from '../app'
import { injectClause, StoreProps } from '../../stores/storeHelper'
import { inject, observer } from 'mobx-react'

const AdminArea = (props: NavigationProps & StoreProps): JSX.Element => {
    const [surveys, setSurveys] = React.useState(new Array<Survey>())
    props.uiStore!.firebaseService.getSurveys().then(setSurveys)

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

export default inject(...injectClause)(observer(AdminArea))
