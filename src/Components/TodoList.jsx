import React from "react";

const TodoList = ({ todos, setTodos,status }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
            {
            status === 'all' &&
            todos.map((item,index) => <Todo key={index} text={item.text} id={item.id} todos={todos} setTodos={setTodos} completed={item.completed}/>)
            }
            {
                status === 'completed' &&
                 todos.map((item,index) => item.completed && <Todo key={index} text={item.text} id={item.id} todos={todos} setTodos={setTodos} completed={item.completed}/>)
            }
            {
                status === 'uncompleted' &&
                 todos.map((item,index) => !item.completed && <Todo key={index} text={item.text} id={item.id} todos={todos} setTodos={setTodos} completed={item.completed}/>)
            }

        </ul>
      </div>
    </div>
  );
};

export default TodoList;


export const Todo = ({ text,id,todos,setTodos,completed }) => {
    const handleTrash = () =>{
        setTodos(todos.filter(item => item.id !== id))
    } 
    const completedHandler = (id) =>{
       setTodos(todos.map(item => {
           if(item.id === id){
               return {
                ...item,
                completed:!item.completed,
               }
           }
           return item;
       }))
    }
    console.log(completed);
  return (
    <>
      <div className="todo">
        <li className={`todo-item ${completed && "completed" }`}>{text}</li>
        <button className="complete-btn" onClick={()=> completedHandler(id)}>
          <li className="fas fa-check"
          ></li>
        </button>
        <button className="trash-btn" onClick={()=> handleTrash(id)}>
          <li className="fas fa-trash"></li>
        </button>
      </div>
    </>
  );
};
