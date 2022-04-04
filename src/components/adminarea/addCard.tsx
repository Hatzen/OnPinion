import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavigationProps } from '../app'

export const AddCard = (props: NavigationProps): JSX.Element => {
    const clickEvent = (): void => {
        props.navigate('/manage/create')
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={clickEvent}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        <FontAwesomeIcon icon={'add'} />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Umfrage erstellen
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default AddCard