import React, { Suspense } from 'react'
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom'
import { ApplicationBar } from './appBar'
import StartPage from './startpage'

const LazyUserArea = React.lazy(() => import('./userarea/userarea'))
const LazyAdminArea = React.lazy(() => import('./adminarea/adminarea'))
const LazyManageCreateView = React.lazy(() => import('./adminarea/manageCreateView/manageCreateView'))
const LazyManageShowView = React.lazy(() => import('./adminarea/manageShowView'))

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
            <ApplicationBar navigate={useNavigate()}></ApplicationBar>
            <Suspense fallback={<div className='lds-ring'><div></div><div></div><div></div><div></div></div>}>
                <Routes>
                    <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                    [Admin]
                    <Route path="/manage" element={<LazyAdminArea navigate={useNavigate()}></LazyAdminArea>} />
                    <Route path="/manage/create" element={<LazyManageCreateView></LazyManageCreateView>} />
                    <Route path="/manage/result/:surveyId" element={<LazyManageShowView></LazyManageShowView>} />
                    [User]
                    <Route path="/result/:surveyId" element={<LazyUserArea navigate={useNavigate()}></LazyUserArea>} />
                    <Route path="/participate/:surveyId" element={<LazyUserArea navigate={useNavigate()}></LazyUserArea>} />
                    [Error 404]
                    <Route path="*" element={<StartPage navigate={useNavigate()}></StartPage>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter