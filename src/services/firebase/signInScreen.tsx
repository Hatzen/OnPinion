import React from 'react'
// import auth from 'firebase/auth' // TODO why do we need to use compat here?
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebaseConfig } from './firebaseConfig'

// https://github.com/firebase/firebaseui-web#email-link-authentication
export const SignInScreen = (): JSX.Element => {
    
    firebase.initializeApp(firebaseConfig)
    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/manage',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // TODO: doesnt work, how to set TenantConfig?
        buttonColor: '#004A7F', // Same as apps theme blue.
        // autoUpgradeAnonymousUsers: true,
        immediateFederatedRedirect: true,
        popupMode: true
    }
    return (
        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    )
}


export default SignInScreen