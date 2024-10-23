/* eslint-disable react/prop-types */
export const TodoItem = ({ todo, onDelete }) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            <button className="btn btn-danger"
                    onClick={()=> onDelete(todo.id)}> Borrar 
            </button>
        </li>
    )
}