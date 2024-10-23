import { useTodo } from "../hooks/useTodo";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
    const {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    } = useTodo();

    return (
        <>
            <h1>TodoApp</h1>
            <p>Total: {countTodos()}</p>
            <p>Pendientes: {countPendingTodos()}</p>
            <hr />

            <TodoAdd onNewTodo={handleNewTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo}/>
        </>
    );
};
