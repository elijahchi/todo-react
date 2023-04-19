import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import react from 'react';

function App() {

  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const todo = e.target.value;
    setTodo(todo)
  }

  const handleClick = () => {
    if (!todo) {
      return;
    }
    const newTodos = todos.concat({ name: todo, done: false });
    setTodos(newTodos);
    setTodo('')
  }

  const handleToggle = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i !== index) {
        return todo;
      }
      return { name: todo.name, done: !todo.done };
    })
    setTodos(newTodos);
  }

  const remainingTodos = todos.filter(todo => !todo.done).length;

  const handleDelete = (todo) => {
    const newTodos = todos.filter(t => t !== todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='remaining'>RemainingTodos: {remainingTodos}</div>
      <div>
        <input type='text' onChange={handleChange} value={todo}></input>
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li className='item'>
              <span
              className={todo.done ? "done": ""}><input
                className='checkbox'
                type="checkbox"
                checked={todo.done ? 'checked' : ''}
                onClick={() => handleToggle(i)}
              ></input>{todo.name}</span><button onClick={() => handleDelete(todo)}>Delete</button></li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
