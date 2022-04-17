
import { ResponsiveRadar } from '@nivo/radar'
import * as React from 'react'
import { SurveyEntry } from 'model/surveyEntry'

export class RadarHolder {
    private readonly indexBy = 'choice'
    keyValueMap: {[key: string]: number} = {}

    constructor (surveyEntry: SurveyEntry) {
        this.keyValueMap = {}
        if (surveyEntry.surveyAnswers == null) {
            return
        }
        // TODO: surveyEntry.surveyAnswers? (?=Optional..) we could work around optional with Partitial constructor within FirebaseService to init Arrays..
        Object.values(surveyEntry.surveyAnswers!).forEach(answer => {
            const key = surveyEntry.choices.find(choice => choice.id === answer.choice)!.text
            this.keyValueMap[key] = (this.keyValueMap[key] || 0) + 1
        })
    }

    get data(): Array<{choice: string, Votes: number}> {
        return Object.entries(this.keyValueMap).map(([choiceText, choiceCount]) => {
            return {
                'choice': choiceText,
                'Votes': choiceCount
            }
        }
        )
    }

    get radar(): JSX.Element {
        return (<ResponsiveRadar
            data={this.data}
            keys={['Votes']}
            indexBy={this.indexBy}
            valueFormat='>-.2f'
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            borderColor={{ from: 'color' }}
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            colors={{ scheme: 'nivo' }}
            blendMode='multiply'
            motionConfig='wobbly'
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />)
    }

}