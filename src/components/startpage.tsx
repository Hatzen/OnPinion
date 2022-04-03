import React from 'react'
import { Button, Input } from '@mui/material'

interface Props {
    navigate: (url: string) => void
}

export const StartPage = (props: Props): JSX.Element => {
    return (
        <div style={{ position: 'absolute', top:0, left:0, bottom: 0, right:0, background: 'url(logo.png) no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
            <Button style={{float: 'right'}} variant="text" onClick={() => props.navigate('/manage')}>
                    Umfrage erstellen
            </Button>
            <div style={{textAlign: 'center', margin: 'calc(50% - 120px) auto 0 auto'}}>
                <h1 className='color-primary'>OnPinion</h1>
                <p>Bitte geben sie den Code für die Umfrage ein:</p>
                <Input></Input>
                <Button style={{marginLeft: '25px'}} variant="contained">
                    Zur Umfrage
                </Button>
            </div>
        </div>
    )
}

export default StartPage
