import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export const TodoList = ({todos = [] }) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo, key) => {
                    return (
                        <TodoItem key={key} todo={todo} />
                    )
                })
            }
        </ul>
    )
}