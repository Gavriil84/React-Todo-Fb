import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css';
import  { React, useState } from 'react'
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Todo(props) {
    
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const upDateTodo = () => {
        
        // update todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">I'm a modal</Typography>
                    <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                    <Button onClick={upDateTodo}>Update Todo</Button>
                </Box>
            </Modal>
            <List className="todo__list">
                <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dammy deadline⏰" />
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </List>
        </>
    )
}

export default Todo
