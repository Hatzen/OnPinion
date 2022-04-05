
import { ResponsiveBar } from '@nivo/bar'
import * as React from 'react'

export class BarHolder {

    count: number

    constructor (count: number) {
        this.count = count
    }
    
    get barData(): any {
        return [
            {
                'answer': 'yes',
                'Homeoffice': this.count
            }
        ]
    }

    get bar(): JSX.Element {
        // https://nivo.rocks/bar/
        return <ResponsiveBar
            data={this.barData}
            keys={[
                'Homeoffice'
            ]}
            indexBy="answer"
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
                legend: 'count',
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
