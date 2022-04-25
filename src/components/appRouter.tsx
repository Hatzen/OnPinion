import { injectClause, StoreProps } from '@stores/storeHelper'
import { inject, observer } from 'mobx-react'
import React, { Suspense } from 'react'
import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom'
import { ApplicationBar } from './appBar'
import StartPage from './startpage'

const LazyResultArea = React.lazy(() => import('./userarea/resultArea'))
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

export const AppRouter = (props: StoreProps): JSX.Element => {
    const [error, setError] = React.useState(false)
    props.uiStore!.firebaseService.errorCallback = () => setError(true)
    let errorMessage = <div></div>
    if (error) {
        errorMessage = <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#000A', textAlign: 'center', zIndex: 10}}>
            <h1 style={{color: '#FFF', marginTop: 'calc( 50% - 100px )'}}>Uups.. Da läuft was schief. Entweder die Internetverbindung ist weg oder das kostenlose Datenvolumen des Servers ist ausgelaufen...</h1>
        </div>
    }

    return (
        <div>
            {errorMessage}
            <ApplicationBar navigate={useNavigate()}></ApplicationBar>
            <Suspense fallback={<div className='lds-ring'><div></div><div></div><div></div><div></div></div>}>
                <Routes>
                    <Route path="/" element={<StartPage navigate={useNavigate()} />} />
                    [Admin]
                    <Route path="/manage" element={<LazyAdminArea navigate={useNavigate()}></LazyAdminArea>} />
                    <Route path="/manage/create" element={<LazyManageCreateView></LazyManageCreateView>} />
                    <Route path="/manage/result/:surveyId" element={<LazyManageShowView navigate={useNavigate()}></LazyManageShowView>} />
                    [User]
                    <Route path="/result/:surveyId" element={<LazyResultArea navigate={useNavigate()}></LazyResultArea>} />
                    <Route path="/participate/:surveyId" element={<LazyUserArea navigate={useNavigate()}></LazyUserArea>} />
                    [Error 404]
                    <Route path="*" element={<StartPage navigate={useNavigate()}></StartPage>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default inject(...injectClause)(observer(AppRouter))