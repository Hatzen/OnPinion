import { SurveyAnswer } from './surveyAnswer'
import { GraphType } from './graphType'
import { SurveyChoices } from './surveyChoices'

export class SurveyEntry {
    id?: string
    question!: string
    graphType!: GraphType
    surveyChoices!: SurveyChoices
    surveyAnswers: SurveyAnswer[] = []
}