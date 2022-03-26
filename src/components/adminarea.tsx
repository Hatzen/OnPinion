import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import { FirebaseService } from '../services/firebase.service'
import { ResponsiveBar } from '@nivo/bar'
import { Button } from '@mui/material'


interface AppState {
    count: number
}

class App extends React.Component<any, AppState> {

    private firebaseService: FirebaseService
    
    constructor(props: any) {
        super(props)
        this.state ={
            count: 77,
        }
        this.firebaseService = new FirebaseService()
        this.firebaseService.initFirebase()
        this.firebaseService.listenData((count: number) => {
            // TODO: Remove alert('hello ' + count)
            this.setState({count: count})
        })
    }

    render(): JSX.Element {
        const stores: StoreProps = {
            uiStore: UiStore
        }
        return (
            <div style={{ position: 'absolute', top:0, left:0, bottom: 0, right:0 }}>
                {this.bar}
                <Provider {...stores}>
                    <div>
                        Home
                        <Button
                            onClick={() => {
                                this.firebaseService.updateData(5)
                            }}
                            variant="contained">Update Value</Button>
                    </div>
                </Provider>
            </div>
        )
    }
    
    get barData(): any {
        return [
            {
                'answer': 'yes',
                'Homeoffice': this.state.count
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

export default App
