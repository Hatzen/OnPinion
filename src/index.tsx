import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { createTheme , ThemeProvider } from '@mui/material'

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

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('app-root'),
)

// Check config is working for observable non instantiated attributes.
// https://mobx.js.org/installation.html#installation
// eslint-disable-next-line no-prototype-builtins
if (!new class { x: any }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly to set defaults for props.')