import { SurveyEntry } from './surveyEntry'

export class Survey {
    id?: string
    name!: string
    createdAt!: number
    participations = 0
    canSkip = false
    canSeeResult = false
    deadline = -1
    isClosed = false
    surveyEntries: SurveyEntry[] = []
    
    constructor() {
        this.id = 'dummy2-' + new Date().getTime()
    }
}