import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export const TodoList = ({todos = [], onDelete }) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
                    )
                })
            }
        </ul>
    )
}