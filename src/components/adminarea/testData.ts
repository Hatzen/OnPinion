import { Survey } from './../../model/survey'
import { GraphType } from '../../model/graphType'
import { SurveyChoices } from '../../model/surveyChoices'

export const testData: Survey = {
    id: 'testId',
    name: 'Allgemeine Zufriedenheits Umfrage',
    createdAt: -1,
    participations: 0,
    canSkip: false,
    canSeeResult: false,
    deadline: -1,
    isClosed:false,
    surveyEntries: [
        {
            id: 'surveyEntry1',
            question: 'Politisch interessiert',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Ja'
                },
                {
                    id: 'choice-2',
                    text: 'Nein'
                }
            ]
        },
        {
            id: 'surveyEntry2',
            question: 'Wie oft schaust du am Tag aufs Handy?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: '1-2 Mal'
                },
                {
                    id: 'choice-2',
                    text: '3-10 Mal'
                },
                {
                    id: 'choice-3',
                    text: '11 und mehr'
                }
            ]
        },
        {
            id: 'surveyEntry3',
            question: 'Welche Musikrichtung hörst du?',
            graphType: GraphType.RADAR,
            surveyChoices: SurveyChoices.MULTISELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Rock/ Metal'
                },
                {
                    id: 'choice-2',
                    text: 'Hip Hop / Rap'
                },
                {
                    id: 'choice-3',
                    text: 'Klassisch / Oper'
                },
                {
                    id: 'choice-4',
                    text: 'Elektronisch'
                },
                {
                    id: 'choice-5',
                    text: 'Radio'
                }
            ]
        },
        {
            id: 'surveyEntry4',
            question: 'Witzigste Erfahrung in der FourEnergy?',
            graphType: GraphType.TEXT,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: []
        },
        {
            id: 'surveyEntry5',
            question: 'Was ist dir bei Menschen am wichtigsten?',
            graphType: GraphType.RADAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Ehrlichkeit'
                },
                {
                    id: 'choice-2',
                    text: 'Witz'
                },
                {
                    id: 'choice-3',
                    text: 'Verlässlichkeit'
                },
                {
                    id: 'choice-4',
                    text: 'Respekt'
                }
            ]
        },
        {
            id: 'surveyEntry6',
            question: 'Wie regelmäßig nimmst du am News@4E teil?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Immer'
                },
                {
                    id: 'choice-2',
                    text: 'Noch nie'
                },
                {
                    id: 'choice-3',
                    text: 'Wenn es zeitlich passt'
                },
                {
                    id: 'choice-4',
                    text: 'Mal so mal so'
                }
            ]
        },
        {
            id: 'surveyEntry7',
            question: 'Was hindert dich am meisten an der Teilnahme?',
            graphType: GraphType.TEXT,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: []
        },
        {
            id: 'surveyEntry8',
            question: 'Von wann bis wann ist die beste Zeit?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: '8-12 Uhr'
                },
                {
                    id: 'choice-2',
                    text: '12-13 Uhr'
                },
                {
                    id: 'choice-3',
                    text: '13 - 16 Uhr'
                },
                {
                    id: 'choice-4',
                    text: 'ab 16 Uhr'
                }
            ]
        },
        {
            id: 'surveyEntry9',
            question: 'Was ist deine aktuelle Rolle bei FourEnergy?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.MULTISELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Tester'
                },
                {
                    id: 'choice-2',
                    text: 'Entwickler'
                },
                {
                    id: 'choice-3',
                    text: 'Product Owner / Scrum Master'
                },
                {
                    id: 'choice-4',
                    text: 'Business Analyst'
                }
            ]
        },
        {
            id: 'surveyEntry10',
            question: 'Wie ging es dir letztes Jahr?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Gut'
                },
                {
                    id: 'choice-2',
                    text: 'Ganz ok'
                },
                {
                    id: 'choice-3',
                    text: 'Mal so mal so'
                },
                {
                    id: 'choice-4',
                    text: 'Eher nicht so gut'
                }
            ]
        },
        {
            id: 'surveyEntry11',
            question: 'Wie geht es dir dieses Jahr?',
            graphType: GraphType.BAR,
            surveyChoices: SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Gut'
                },
                {
                    id: 'choice-2',
                    text: 'Ganz ok'
                },
                {
                    id: 'choice-3',
                    text: 'Mal so mal so'
                },
                {
                    id: 'choice-4',
                    text: 'Eher nicht so gut'
                }
            ]
        },
    ]
} as Survey