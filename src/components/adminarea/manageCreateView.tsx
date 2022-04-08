import * as React from 'react'
import { Button, List, ListItem, ListItemText, Skeleton, Snackbar } from '@mui/material'
import CreateSurveyEntry from './manageCreateView/createSurveyEntry'
import { SurveyEntry } from '../../model/surveyEntry'

export const ManageCreateView = (): JSX.Element => {
    const [open, setOpen] = React.useState(false)
    const [surveyEntries, setSurveyEntries] = React.useState(new Array<SurveyEntry>())

    const addSurveyEntry = (surveyEntry: SurveyEntry): void => {
        setSurveyEntries(surveyEntries.concat(surveyEntry))
    }

    const handleClick = (): void => {
        setOpen(true)
    }
  
    const handleClose = (event: any): any => {
        if (event.reason === 'clickaway') {
            return
        }
    
        setOpen(false)
    }
  
    const action = (
        <React.Fragment>
            <Button color='secondary' size='small' onClick={handleClose}>
                Close
            </Button>
        </React.Fragment>
    )

    return (
        <div>
            [<Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />]
            <List component='nav' aria-label='mailbox folders'>
                {
                    surveyEntries.map(entry => {
                        return (<CreateSurveyEntry key={'test'} />)
                    })
                }
                <ListItem divider onClick={(event) => addSurveyEntry(new SurveyEntry())}>
                    <ListItemText primary="+ Frage hinzufügen" />
                </ListItem>
            </List>
            
            <Button onClick={handleClick}>Open simple snackbar</Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message='Note archived'
                action={action}
            />
        </div>
    )
}

export default ManageCreateView