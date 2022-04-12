import { SurveyAnswer } from './../model/surveyAnswer'
import { SurveyEntry } from './../model/surveyEntry'
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
    }

    watchSurvey(id: string): void {
        this.firebaseService.watchForSurvey(id, this.setSurvey.bind(this))
    }

    setSurvey(survey: Survey): void {
        // TODO: We loose the observable reference here, dont we?
        this.currentSurvey = survey
    }
    
    addAnswer(surveyEntry: SurveyEntry, surveyAnswer: SurveyAnswer): void {
        // debugger
        let surveyEntryId
        if (this.currentSurvey.surveyEntries.length != null) {
            surveyEntryId = this.currentSurvey.surveyEntries.indexOf(surveyEntry)!.toString()
        } else {
            // surveyEntryId = Object.values(this.currentSurvey.surveyEntries).find(entry => entry === surveyEntry)!.toString()
            surveyEntryId = Object.values(this.currentSurvey.surveyEntries).indexOf(surveyEntry)!.toString()
        }
        this.firebaseService.addSurveyAnswer(this.currentSurvey.id!, surveyEntryId, surveyAnswer)
    }
}

export default new UiStore()