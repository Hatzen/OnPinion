
import { ResponsiveRadar } from '@nivo/radar'
import * as React from 'react'

export class RadarHolder {

    get data(): any[] {
        return [
            {
                'taste': 'fruity',
                'chardonay': 74,
                'carmenere': 22,
                'syrah': 58
            },
            {
                'taste': 'bitter',
                'chardonay': 41,
                'carmenere': 23,
                'syrah': 86
            },
            {
                'taste': 'heavy',
                'chardonay': 27,
                'carmenere': 71,
                'syrah': 95
            },
            {
                'taste': 'strong',
                'chardonay': 63,
                'carmenere': 110,
                'syrah': 25
            },
            {
                'taste': 'sunny',
                'chardonay': 72,
                'carmenere': 70,
                'syrah': 51
            }
        ]
    }

    get radar(): JSX.Element {
        return (<ResponsiveRadar
            data={this.data}
            keys={[ 'chardonay', 'carmenere', 'syrah' ]}
            indexBy='taste'
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