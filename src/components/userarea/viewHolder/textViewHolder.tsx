
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import * as React from 'react'
import { SurveyEntry } from '@model/surveyEntry'

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
        return (<div>
            {this.comments.map((element, index) => (
                <Card key={Math.random()}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                                {element}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>)
    }

}