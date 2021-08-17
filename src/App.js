
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  let localData = localStorage.getItem('todos')
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(localData?JSON.parse(localData):[])  
  const [status, setStatus] = useState('all');
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div>
      <header>
        <h1>Shahjalal 's Todo</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} 
      inputText={inputText} setInputText={setInputText} setStatus={setStatus} status={status}/>
      <TodoList inputText={inputText} todos={todos} setTodos={setTodos} status={status}/>

    </div>
  );
}

export default App;
