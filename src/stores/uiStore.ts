import { SurveyAnswer } from 'model/surveyAnswer'
import { SurveyEntry } from 'model/surveyEntry'
import { Survey } from 'model/survey'
import { FirebaseService } from 'services/firebase/firebase.service'
import { makeAutoObservable } from 'mobx'

export class UiStore {

    readonly firebaseService: FirebaseService
    // Observable.
    currentSurvey: Survey = new Survey()
    keepSync = false
    loggedInWithEmail = false
    userId?: string
    
    constructor() {
        makeAutoObservable(this)
        this.firebaseService = new FirebaseService()
        this.firebaseService.initFirebase(this.setLogin.bind(this))
        // this.firebaseService.loginAndGetUserId()
    }

    // Actions.

    setLogin(userId: string, known: boolean): void {
        this.userId = userId
        this.loggedInWithEmail = known
        // debugger
    }

    loadSurvey(id: string): void {
        this.firebaseService.getSurveyWithId(id)
            .then(this.setSurvey.bind(this))
    }

    watchSurvey(id: string): void {
        this.firebaseService.watchForSurvey(id, this.setSurvey.bind(this))
    }

    setSurvey(survey: Survey): void {
        // TODO: We loose the observable reference here, dont we?
        this.currentSurvey = survey
    }
    
    addAnswer(surveyEntry: SurveyEntry, surveyAnswer: SurveyAnswer): void {
        const surveyEntryId = this.currentSurvey.surveyEntries.indexOf(surveyEntry)!.toString()
        this.firebaseService.addSurveyAnswer(this.currentSurvey.id!, surveyEntryId, surveyAnswer)
    }
}

export default new UiStore()