import React from 'react'
import { Button, TextField } from '@mui/material'
import { NavigationProps } from './appRouter'

export const StartPage = (props: NavigationProps): JSX.Element => {
    const placeholder = 'z.B. xD3qf5'
    let value = ''
    
    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')

    const handleParticipationClick = (): void => {
        if (value.trim().length === 0) {
            setError(true)
            setHelperText('Bitte gültigen Wert eingeben.')
            return
        } else {
            setHelperText('')
            setError(false)
        }
        props.navigate('/participate/' + value)
    }

    return (
        <div style={{ position: 'absolute', top:100, left:0, bottom: 0, right:0, background: 'url(logo.png) no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
            <Button style={{float: 'right'}} variant="text" onClick={() => props.navigate('/manage')}>
                    Umfrage erstellen
            </Button>
            <div style={{textAlign: 'center', top:' calc(50% - 100px)', bottom: '50%', position: 'relative'}}>
                <h1 className='color-primary'>OnPinion</h1>
                <p>Bitte geben sie den Code für die Umfrage ein:</p>
                <TextField label='Umfrage Code' placeholder={placeholder} onChange={(event) => value = event.target.value}
                    error={error} helperText={helperText}></TextField>
                <Button style={{marginLeft: '25px'}} variant="contained" onClick={handleParticipationClick}>
                    Zur Umfrage
                </Button>
            </div>
        </div>
    )
}

export default StartPage
