import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import StartPage from './startpage'
import '../styles/app.css'
import AdminArea from './adminarea'
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck, faAdd } from '@fortawesome/free-solid-svg-icons'

library.add(faUserCheck, faAdd)

export const withNavigation = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => <Component {...props} navigate={useNavigate()} />
}

interface AppState {
    count: number
}

export interface NavigationProps {
    navigate: NavigateFunction
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
                <Route path="/result/:surveyId" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                <Route path="/participate/:surveyId" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                <Route path="/manage/create" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
            </Routes>
        </Provider>
    )
}

export default withNavigation(App)