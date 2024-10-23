import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos([newTodo, ...todos]); // Agregar nuevo todo
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id)); // Eliminar todo
    };

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <TodoAdd onNewTodo={handleNewTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </>
    );
};
