
import { BarDatum, ResponsiveBar } from '@nivo/bar'
import * as React from 'react'
import { SurveyEntry } from '../../../model/surveyEntry'

export class BarHolder {

    keyValueMap: {[key: string]: number} = {}

    constructor (surveyEntry: SurveyEntry) {
        this.keyValueMap = {}
        if (surveyEntry.surveyAnswers == null) {
            return
        }
        // debugger
        // TODO: surveyEntry.surveyAnswers? we could work around optional with Partitial constructor within FirebaseService to init Arrays..
        Object.values(surveyEntry.surveyAnswers!).forEach(answer => {
            const key = surveyEntry.choices.find(choice => choice.id === answer.choice)!.text
            this.keyValueMap[key] = (this.keyValueMap[key] || 0) + 1
        })
    }
    
    get barData(): BarDatum[] {
        return [
            this.keyValueMap
        ]
    }

    get bar(): JSX.Element {
        // https://nivo.rocks/bar/
        return <ResponsiveBar
            data={this.barData}
            keys={Object.keys(this.keyValueMap)}
            indexBy="Wahl"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'answer',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Anzahl',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            role="application"
        />
    }
}
