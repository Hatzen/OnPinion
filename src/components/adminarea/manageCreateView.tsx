import * as React from 'react'
import { Button, Divider, List, ListItem, ListItemText, Skeleton, Snackbar } from '@mui/material'

export const ManageCreateView = (): JSX.Element => {
    const [open, setOpen] = React.useState(false)

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
            <Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />
            <List component='nav' aria-label='mailbox folders'>
                <ListItem button>
                    <ListItemText primary='Inbox' />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary='Drafts' />
                </ListItem>
                <ListItem button>
                    <ListItemText primary='Trash' />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary='Spam' />
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