import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css';
import React from 'react'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dammy deadline⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
