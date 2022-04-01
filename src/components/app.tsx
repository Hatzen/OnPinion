import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import StartPage from './startpage'
import '../styles/app.css'
import AdminArea from './adminarea'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
            <Provider {...stores}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={StartPage} />
                        <Route path="/manage" component={AdminArea} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App
