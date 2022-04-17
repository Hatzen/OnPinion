import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavigationProps } from './appRouter'

export const ApplicationBar = (props: NavigationProps): JSX.Element => {
    const goBack = (): void => {
        if (window.history.state && window.history.state.idx > 0) {
            props.navigate(-1)
        } else {
            props.navigate('/', { replace: true }) // the current entry in the history stack will be replaced with the new one with { replace: true }
        }
    }

    const backButton =
        (<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={goBack}
        >
            <FontAwesomeIcon icon={'arrow-left'} />
        </IconButton>)
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginBottom: 100}}>
            <AppBar position="static">
                <Toolbar>
                    {backButton}
                    <h1 style={{width: '100%'}}>
                        OnPinion
                    </h1>
                    <Button onClick={() => props.navigate('/manage')} style={{float: 'right'}} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}