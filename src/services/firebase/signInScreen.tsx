import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { inject, observer } from 'mobx-react'
import { injectClause, StoreProps } from '@stores/storeHelper'

export const SignInScreen = (props: StoreProps): JSX.Element => {
    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
    }

    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    return (
        <div>
        </div>
    )
}


export default inject(...injectClause)(observer(SignInScreen))