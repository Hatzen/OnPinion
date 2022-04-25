
import { Card, CardContent, IconButton, Typography } from '@mui/material'
import * as React from 'react'
import { SurveyEntry } from 'model/surveyEntry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <Card key={Math.random()} style={{marginBottom: 10}}>
                    <CardContent>
                        <div style={{float: 'right', display: 'block', position: 'relative', top: 0}}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <FontAwesomeIcon icon={'caret-up'} />
                            </IconButton>
                            <Typography gutterBottom variant="body1" component="div">
                                12
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <FontAwesomeIcon icon={'caret-down'} />
                            </IconButton>
                        </div>
                        
                        <Typography gutterBottom variant="body1" component="div">
                            {element}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>)
    }

}