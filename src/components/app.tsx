import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import StartPage from './startpage'
import '../styles/app.css'
import AdminArea from './adminarea'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

export const withNavigation = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => <Component {...props} navigate={useNavigate()} />
}

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
        // <Route path="/manage" element={withNavigation(AdminArea)} />
        return (
            <Provider {...stores}>
                <Routes>
                    <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                    
                </Routes>
            </Provider>
        )
    }
}

export default withNavigation(App)