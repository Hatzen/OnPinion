import React from 'react'
import { Provider } from 'mobx-react'
import UiStore from 'stores/uiStore'
import { StoreProps } from 'stores/storeHelper'
import 'styles/app.css'
import { createTheme , ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './appRouter'
import { initIcons } from 'services/fontawesome/fontawesome.service'

export const App = (): JSX.Element => {
    const theme = createTheme ({
        palette: {
            primary: {
                main: '#004A7F', // Blue
            },
            secondary: {
                main: '#E3E6E8', // Gray
            }
        }
    })
    const stores: StoreProps = {
        uiStore: UiStore
    }
    initIcons()
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Provider {...stores}>
                    <AppRouter />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App