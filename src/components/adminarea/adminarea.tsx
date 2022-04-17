import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Survey } from 'model/survey'
import AddCard from './addCard'
import SurveyCard from './surveyCard'
import { injectClause, StoreProps } from 'stores/storeHelper'
import { inject, observer } from 'mobx-react'
import SignInScreen from 'services/firebase/signInScreen'
import { NavigationProps } from 'components/appRouter'

const AdminArea = (props: NavigationProps & StoreProps): JSX.Element => {
    // const [loggedIn, setLoggedIn] = React.useState(props.uiStore!.loggedInWithEmail)
    /* const [loggedIn, setLoggedIn] = React.useState(props.uiStore!.loggedInWithEmail)
    //observe(props.uiStore!.loggedInWithEmail, newValue => setLoggedIn(newValue as any))
    console.log('Why is this called only once?')
    useEffect(() => {
        setLoggedIn(props.uiStore!.loggedInWithEmail)
    })*/
    debugger
    const loggedIn = props.uiStore!.loggedInWithEmail
    if (!loggedIn) {
        return (<SignInScreen></SignInScreen>)
    }

    let [surveys, setSurveys] = React.useState(new Array<Survey>())
    useEffect(
        () => { [surveys, setSurveys] = React.useState(new Array<Survey>()) }
        , [])
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
