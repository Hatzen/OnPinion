import { SurveyAnswer } from './../model/surveyAnswer'
import { Survey } from './../model/survey'
// import firebaseui from 'firebaseui'
// https://firebase.google.com/docs/web/setup?authuser=1&hl=de
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAnalytics, Analytics } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { child, Database, DatabaseReference, get, getDatabase, onValue, push, ref } from 'firebase/database'
import SurveyMapper, { FirebaseSurvey } from '../stores/mapper/SurveyMapper'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FirebaseService {

    private app!: FirebaseApp
    private analytics!: Analytics
    private database!: Database
    private readonly CUSTOMER = 'fourenergy'
    
    
    initFirebase (): void {
        this.app = initializeApp(firebaseConfig)
        this.analytics = getAnalytics(this.app)
        this.database = getDatabase(this.app)
        console.log('Collecting data is ' + this.analytics.app.automaticDataCollectionEnabled)
    }

    loginAndGetUserId(callback: (userId: string) => void): void {
        const auth = getAuth()
        signInAnonymously(auth)
            .then(() => {
                // Signed in..
                // TODO: Do we need onAuthStateChanged or does this Promise doesnt pass the user as well?
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error('Firebase anonymous login failed: ' + errorCode + '- ' + errorMessage)
            })
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid
                callback(uid)
            } else {
                // User is signed out
            }
        })

        // TODO: enable authentication via email.
        /*
        // https://firebase.google.com/docs/web/learn-more?authuser=1&hl=de#config-object
        https://firebase.google.com/docs/auth/web/firebaseui?hl=de&authuser=1#set_up_sign-in_methods

        const ui = new firebaseui.auth.AuthUI(firebase.auth())
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false
                }
            ]
        })
        */
    }

    // https://firebase.google.com/docs/database/web/read-and-write

    addSurvey(survey: Survey): void {
        console.log('create entry: ', survey)
        const myRef = ref(this.database, this.CUSTOMER + '/surveys/')
        push(myRef, survey)
    }

    addSurveyAnswer(surveyId: string, surveyEntryId: string, surveyAnswer: SurveyAnswer): void {
        const path = this.CUSTOMER + '/surveys/' + surveyId + '/surveyEntries/' + surveyEntryId + '/surveyAnswers'
        console.log('add answer on path ' + path, surveyAnswer)
        const myRef = ref(this.database, path)
        push(myRef, surveyAnswer)
    }

    getSurveys(): Promise<Survey[]> {
        return new Promise((resolve, reject) => {
            get(child(ref(this.database), this.CUSTOMER + '/surveys/'))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const keyValueMap = snapshot.val()
                        const surveys = Object.entries(keyValueMap).map(
                            ([nodeId, firebaseNodeObject]) => SurveyMapper.map(firebaseNodeObject as FirebaseSurvey, nodeId))
                        resolve(surveys)
                    } else {
                        reject()
                        console.log('No data available')
                    }
                }
                ).catch((error) => {
                    reject()
                    console.error(error)
                })
        })
    }

    getSurveyWithId(id: string): Promise<Survey> {
        return new Promise((resolve, reject) => {
            get(this.getRefForId(id))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const firebaseNodeObject = snapshot.val() as FirebaseSurvey
                        const survey = SurveyMapper.map(firebaseNodeObject, id)
                        resolve(survey)
                    } else {
                        reject()
                        console.log('No data available')
                    }
                }
                ).catch((error) => {
                    reject()
                    console.error(error)
                }
                )
        })
    }

    // TODO: How to unregister watch?
    watchForSurvey(id: string, callback: (survey: Survey) => void): void {
        onValue(this.getRefForId(id), (snapshot) => {
            const firebaseNodeObject = snapshot.val() as FirebaseSurvey
            const survey = SurveyMapper.map(firebaseNodeObject, id)
            callback(survey)
        })
    }

    private getRefForId(id: string): DatabaseReference {
        return child(ref(this.database), this.CUSTOMER + '/surveys/' + id)
    }

}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://firebase.google.com/docs/web/learn-more?authuser=1&hl=de#config-object
const firebaseConfig = {
    apiKey: 'AIzaSyBJA_OP8pNeKS8UOfhAcOpUskkHRa-V0bM', // TODO: Hide? https://stackoverflow.com/a/37484053/8524651
    authDomain: 'onpinion-d2fd9.firebaseapp.com',
    databaseURL: 'https://onpinion-d2fd9-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'onpinion-d2fd9',
    storageBucket: 'onpinion-d2fd9.appspot.com',
    messagingSenderId: '666898493007',
    appId: '1:666898493007:web:754f8e9cbad09439ad843a',
    measurementId: 'G-FC0RQS22SB'
}