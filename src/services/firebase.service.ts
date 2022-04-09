import { Survey } from './../model/survey';
import { CreateSurveyEntry } from './../components/adminarea/manageCreateView/createSurveyEntry';
// import firebaseui from 'firebaseui'
// https://firebase.google.com/docs/web/setup?authuser=1&hl=de
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAnalytics, Analytics } from 'firebase/analytics'
import { Database, DatabaseReference, getDatabase, onValue, push, ref, set } from 'firebase/database'
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

        /*
        // https://firebase.google.com/docs/web/learn-more?authuser=1&hl=de#config-object
        https://firebase.google.com/docs/auth/web/firebaseui?hl=de&authuser=1#set_up_sign-in_methods

        TODO: Why is auth not defined
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
    listenData(callback: (count: number) => void): void {
        onValue(this.ref, (snapshot) => {
            const data = snapshot.val() // TODO: Add soem typings
            callback(data)
        })
    }

    updateData(count: number): void {
        set(this.ref, Math.random()*12 + count)
    }

    addSurvey(survey: Survey): void {
        const myRef = ref(this.database, this.CUSTOMER + '/surveys/')
        push(myRef, survey)
    }

    get ref(): DatabaseReference {
        return ref(this.database, this.CUSTOMER + '/surveys/first/surveyentrys/homeoffice/votes')
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