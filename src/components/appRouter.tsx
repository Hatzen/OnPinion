import AdminArea from './adminarea/adminarea'
import UserArea from './userarea/userarea'
import ManageCreateView from './adminarea/manageCreateView/manageCreateView'
import ManageShowView from './adminarea/manageShowView'
import StartPage from './startpage'
import React from 'react'
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom'
import { ApplicationBar } from './appBar'

export const withNavigation = (Component: any) => {
    // eslint-disable-next-line react/display-name
    return (props: NavigationProps) => <Component {...props} navigate={useNavigate()} />
}

export interface NavigationProps {
    navigate: NavigateFunction
}

export const AppRouter = (): JSX.Element => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ApplicationBar></ApplicationBar>}>
                    [Admin]
                    <Route path="/manage" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                    <Route path="/manage/create" element={<ManageCreateView></ManageCreateView>} />
                    <Route path="/manage/result/:surveyId" element={<ManageShowView></ManageShowView>} />
                    [User]
                    <Route path="/result/:surveyId" element={<AdminArea navigate={useNavigate()}></AdminArea>} />
                    <Route path="/participate/:surveyId" element={<UserArea navigate={useNavigate()}></UserArea>} />
                    <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                </Route>
                [Error 404]
                <Route path="*" element={<StartPage navigate={useNavigate()}></StartPage>} />
            </Routes>
        </div>
    )
}

export default AppRouter