import { ChoiceId } from './surveyEntry'

export class SurveyAnswer {
    id?: string
    choice!: ChoiceId
    user!: string
    value?: SurveyAnswerValue
}

// TODO: How to manage type dynamicly. Especially long strings should be covered by Ids to reduce data usage..
//  And maybe we can aggregate the result already here?
type SurveyAnswerValue = PriorityValues | MultiValue | SingleValue | null
type MultiValue = string[] | number[]
type SingleValue = string | number
// TODO: Or better use multvalue and sort them dependingly?
type PriorityValues = {[key: string]: number | string}