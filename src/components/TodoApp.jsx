import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { addTodo, deleteTodo} from "../store/todosSlice";

export const TodoApp = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleNewTodo = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
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
