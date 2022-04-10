import { SurveyAnswer } from './surveyAnswer'
import { GraphType } from './graphType'
import { SurveyChoices } from './surveyChoices'

export type ChoiceId = string

export class SurveyChoice {
    id!: ChoiceId
    text!: string
}

export class SurveyEntry {
    id?: string
    question!: string
    graphType!: GraphType
    surveyChoices!: SurveyChoices
    choices: SurveyChoice[] = []
    surveyAnswers?: SurveyAnswer[] = []

    constructor() {
        this.id = 'dummy-' + new Date().getTime()
    }

    get isValid(): boolean {
        return this.graphType != null && this.question != null && this.question.length > 0 && this.surveyChoices != null
    }
}