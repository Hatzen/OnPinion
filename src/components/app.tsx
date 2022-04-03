import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import StartPage from './startpage'
import '../styles/app.css'
import AdminArea from './adminarea'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const withNavigation = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => <Component {...props} navigate={useNavigate()} />
}

interface AppState {
    count: number
}

export const App = (props: AppState): JSX.Element => {
    const stores: StoreProps = {
        uiStore: UiStore
    }
    return (
        <Provider {...stores}>
            <Routes>
                <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                <Route path="/manage" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
            </Routes>
        </Provider>
    )
}

export default withNavigation(App)