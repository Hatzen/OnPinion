import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import { Button, Input } from '@mui/material'
import '../styles/app.css'


interface AppState {
    count: number
}

class App extends React.Component<any, AppState> {

    
    constructor(props: any) {
        super(props)
        this.state ={
            count: 77,
        }
    }

    render(): JSX.Element {
        const stores: StoreProps = {
            uiStore: UiStore
        }
        return (
            <div style={{ position: 'absolute', top:0, left:0, bottom: 0, right:0, background: 'url(logo.png) no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
                <Provider {...stores}>
                    <Button style={{float: 'right'}} variant="text">
                            Umfrage erstellen
                    </Button>
                    <div style={{textAlign: 'center', margin: 'calc(50% - 120px) auto 0 auto'}}>
                        <h1 className='color-primary'>OnPinion</h1>
                        <p>Bitte geben sie den Code für die Umfrage ein:</p>
                        <Input></Input>
                        <Button style={{marginLeft: '25px'}} variant="contained">
                            Zur Umfrage
                        </Button>
                    </div>
                </Provider>
            </div>
        )
    }
}

export default App
