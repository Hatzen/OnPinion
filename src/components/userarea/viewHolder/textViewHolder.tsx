
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import * as React from 'react'
import { SurveyEntry } from '../../../model/surveyEntry'

export class TextViewHolder {
    private comments: Array<string> = []

    constructor (surveyEntry: SurveyEntry) {
        if (surveyEntry.surveyAnswers == null) {
            return
        }
        this.comments = Object.values(surveyEntry.surveyAnswers)
            .map(answer => answer.choice)
    }

    get cards(): JSX.Element {
        return (<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {this.comments.map((element, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="body1" component="div">
                                    {element}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>)
    }

}