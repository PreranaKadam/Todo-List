
import edit from "../images/edit.png";
import deleteItem from "../images/deleteItem.png";

export const TodoItem = ({task, deleteTodo, editTodo, toggleComplete}:{task:any, deleteTodo:any, editTodo:any, toggleComplete:any}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <img src={edit} onClick={() => editTodo(task.id)} alt="edit-button"/>
        <img src={deleteItem} onClick={() => deleteTodo(task.id)} alt="delete-button"/>
        </div>
    </div>
  )
}

