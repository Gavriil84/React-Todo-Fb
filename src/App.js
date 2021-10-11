import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out', 'Wash the car']);
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
