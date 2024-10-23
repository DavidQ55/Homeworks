import { useState } from "react";

export const useTodo = () => {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos([newTodo, ...todos]);
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        ));
    };

    const countTodos = () => todos.length;

    const countPendingTodos = () => todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    };
};
