export class SurveyEntry {
    id?: string
    name!: string
    createdAt!: number
    participations = 0
    canSkip = false
    canSeeResult = false
    deadline = -1
    isClosed = false
}