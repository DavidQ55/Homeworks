import { connect } from "react-redux";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { addTodo, deleteTodo } from "../store/todoActions";

// eslint-disable-next-line react/prop-types
export const TodoApp = ({ todos, addTodo, deleteTodo }) => {
    const handleNewTodo = (newTodo) => {
        addTodo(newTodo);
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
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

const mapState = (state) => ({
    todos: state.todos,
});

const mapDispatch = {
    addTodo,
    deleteTodo
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapState, mapDispatch)(TodoApp);
