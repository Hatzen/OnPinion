import { Survey } from './../model/survey'
import { FirebaseService } from './../services/firebase.service'
import { makeAutoObservable } from 'mobx'

export class UiStore {

    readonly firebaseService: FirebaseService
    // Observable.
    currentSurvey: Survey = new Survey()
    keepSync = false
    userId?: string
    
    constructor() {
        this.firebaseService = new FirebaseService()
        this.firebaseService.initFirebase()
        this.firebaseService.loginAndGetUserId(userId => this.userId = userId)
        makeAutoObservable(this)
    }

    // Actions.

    loadSurvey(id: string): void {
        this.firebaseService.getSurveyWithId(id)
            .then(this.setSurvey.bind(this))
        // this.firebaseService.watchForSurvey(id, this.setSurvey.bind(this))
    }

    setSurvey(survey: Survey): void {
        this.currentSurvey = survey
    }
}

export default new UiStore()