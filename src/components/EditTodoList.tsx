import React, {useState} from 'react'

export const EditTodoList = ({editTodo, task}:{editTodo:any, task:any}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
