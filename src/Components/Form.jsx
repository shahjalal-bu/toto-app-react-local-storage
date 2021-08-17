import React from "react";

const Form = ({inputText, setInputText, todos, setTodos,setStatus,status }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    inputText && setTodos([...todos,{
        text:inputText, completed:false,id: Math.random()*1000
    } ]);
    setInputText('')
    setStatus('all')
  };
  const handleStatus = (e) =>{
    setStatus(e.target.value)
  }
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
      <button className="todo-button" type="submit" onClick={handleSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleStatus} value={status}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
