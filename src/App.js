import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'Wash the car']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <FormControl>
        <InputLabel>✅ Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
