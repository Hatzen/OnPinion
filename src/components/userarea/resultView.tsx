import { Button, Typography } from '@mui/material'
import * as React from 'react'
import { FirebaseService } from '../../services/firebase.service'
import { BarHolder } from './viewHolder/barViewHolder'
import { RadarHolder } from './viewHolder/radarViewHolder'

export const ResultView = (): JSX.Element => {
    const firebaseService = new FirebaseService()
    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        firebaseService.initFirebase()
        firebaseService.listenData((count: number) => {
            // TODO: Remove alert('hello ' + count)
            setState(count)
        })
    })

    const barHolder = new BarHolder(state)
    const bar = barHolder.bar

    const radarHolder = new RadarHolder()
    const radar = radarHolder.radar

    return (
        <div style={{width: '900px', minHeight: '600px', position: 'absolute', top: '10%', left: 'calc(50% - 450px)', right: '50%' }}>
            <Typography gutterBottom variant="h5" component="div">
                Wie wird das Wetter morgen?
            </Typography>
            <div style={{height: '600px'}}>
                {bar}
                <Button
                    onClick={() => {
                        firebaseService.updateData(5)
                    }}
                    variant="contained">
                        Update Value
                </Button>
            </div>

            
            <Typography gutterBottom variant="h5" component="div">
                Welche Charakter eigenschaften hast du?
            </Typography>
            <div style={{height: '600px'}}>
                {radar}
            </div>
        </div>
    )
}

export default ResultView