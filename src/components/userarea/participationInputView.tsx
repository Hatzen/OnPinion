import * as React from 'react'
import Typography from '@mui/material/Typography'
import { NavigationProps } from '../app'

export const ParticipationInputView = (props: NavigationProps): JSX.Element => {
    return (
        <Typography gutterBottom variant="h5" component="div">
            Umfrage erstellen
        </Typography>
    )
}

export default ParticipationInputView