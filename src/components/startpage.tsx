import React from 'react'
import { Button, Input } from '@mui/material'
import { useHistory } from 'react-router-dom'

class StartPage extends React.Component {

    render(): JSX.Element {
        const history = useHistory()
        return (
            <div style={{ position: 'absolute', top:0, left:0, bottom: 0, right:0, background: 'url(logo.png) no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
                <Button style={{float: 'right'}} variant="text" onClick={() => history.push('/manage')}>
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
}

export default StartPage
