import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from '../stores/uiStore'
import { StoreProps } from '../stores/storeHelper'
import StartPage from './startpage'
import '../styles/app.css'
import AdminArea from './adminarea/adminarea'
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck, faAdd } from '@fortawesome/free-solid-svg-icons'
import UserArea from './userarea/userarea'
import ManageCreateView from './adminarea/manageCreateView/manageCreateView'
import ManageShowView from './adminarea/manageShowView'

// TODO: Split up file: Router, Stores, Icons, Helper

library.add(faUserCheck, faAdd)

export const withNavigation = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: NavigationProps) => <Component {...props} navigate={useNavigate()} />
}

export interface NavigationProps {
    navigate: NavigateFunction
}

export const App = (): JSX.Element => {

    const stores: StoreProps = {
        uiStore: UiStore
    }
    return (
        <Provider {...stores}>
            <Routes>
                <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                [Admin]
                <Route path="/manage" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                <Route path="/manage/create" element={<ManageCreateView></ManageCreateView>} />
                <Route path="/manage/result/:surveyId" element={<ManageShowView></ManageShowView>} />
                [User]
                <Route path="/result/:surveyId" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                <Route path="/participate/:surveyId" element={<UserArea navigate={useNavigate()}></UserArea>} />
                [Error 404]
                <Route path="*" element={<StartPage navigate={useNavigate()}></StartPage>} />
            </Routes>
        </Provider>
    )
}

export default App