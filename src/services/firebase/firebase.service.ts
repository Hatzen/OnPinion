import { SurveyAnswer } from 'model/surveyAnswer'
import { Survey } from 'model/survey'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAnalytics, Analytics } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { child, Database, DatabaseReference, get, getDatabase, onValue, push, ref } from 'firebase/database'
import SurveyMapper, { FirebaseSurvey } from '../../mapper/surveyMapper'
import { firebaseConfig } from './firebaseConfig'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class FirebaseService {

    app!: FirebaseApp
    private analytics!: Analytics
    private database!: Database
    private readonly CUSTOMER = 'fourenergy'
    errorCallback!: () => void
    
    initFirebase (callback: (userId: string, admin: boolean) => void): void {
        this.app = initializeApp(firebaseConfig)
        this.analytics = getAnalytics(this.app)
        this.database = getDatabase(this.app)
        
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            console.log('User login state changed', user)
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid
                callback(uid, user.email != null)
            } else {
                // User is signed out
            }
        })
        console.log('Collecting data is ' + this.analytics.app.automaticDataCollectionEnabled)
    }

    loginAndGetUserId(): void {
        const auth = getAuth()
        signInAnonymously(auth)
            .then(() => {
                console.log('Logged in user')
                // Signed in..
                // TODO: Do we need onAuthStateChanged or does this Promise doesnt pass the user as well?
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error('Firebase anonymous login failed: ' + errorCode + '- ' + errorMessage)
                this.handleError(error)
            })
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
                    this.handleError(error)
                    reject()
                })
        })
    }

    getSurveyWithId(id: string): Promise<Survey> {
        return new Promise((resolve, reject) => {
            get(this.getRefForId(id))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        // TODO: Assert values with https://github.com/typestack/class-transformer and https://github.com/typestack/class-validator
                        const firebaseNodeObject = snapshot.val() as FirebaseSurvey
                        const survey = SurveyMapper.map(firebaseNodeObject, id)
                        resolve(survey)
                    } else {
                        reject()
                        console.log('No data available')
                    }
                }
                ).catch((error) => {
                    this.handleError(error)
                    reject()
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

    private handleError(error: Error): void {
        console.error(error)
        this.errorCallback()
    }

}
