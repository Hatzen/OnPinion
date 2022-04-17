import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Survey } from '@model/survey'
import { NavigationProps } from '@components/appRouter'

class SurveyCardProps {
    entry!: Survey
}

export const SurveyCard = (props: SurveyCardProps & NavigationProps): JSX.Element => {
    const stateText = props.entry.isClosed ? 'Closed' : 'Open'
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => { props.navigate('manage/result/' + props.entry.id) }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.entry.participations} <FontAwesomeIcon icon={'user-check'} />
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        {stateText}
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