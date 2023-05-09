import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import { useState } from "react";
import { EditTodoList } from "./EditTodoList";
import { TodoItem } from "./TodoItem";

const Form = () => {
    const [todos, setTodos] = useState<any>([]);

    const addTodo = (todo: any) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }

    const deleteTodo = (id: any) => setTodos(todos.filter((todo: any) => todo.id !== id));

    const toggleComplete = (id: any) => {
        setTodos(
            todos.map((todo: any) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const editTodo = (id: any) => {
        setTodos(
            todos.map((todo: any) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task: any, id: any) => {
        setTodos(
            todos.map((todo: any) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };
    return (
        <div className="TodoContainer">
            <TodoList addTodo={addTodo} />
            {todos.map((todo: any) =>
                todo.isEditing ? (
                    <EditTodoList editTodo={editTask} task={todo} />
                ) : (
                    <TodoItem
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    )
}
export default Form;