
import React, { useState } from 'react'

const TodoList = ({addTodo}:{addTodo:any}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');         // clear form after submission
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}
export default TodoList;
