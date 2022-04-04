import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SurveyEntry } from '../adminarea'
import { NavigationProps } from '../app'

class SurveyCardProps {
    entry!: SurveyEntry
}

export const SurveyCard = (props: SurveyCardProps & NavigationProps): JSX.Element => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { props.navigate('result/' + props.entry.id) }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.entry.participationcount} <FontAwesomeIcon icon={'user-check'} />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.entry.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SurveyCard