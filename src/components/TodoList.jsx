import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export const TodoList = ({todos = [], onDelete, onToggle }) => {
    return (
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            }
        </ul>
    )
}