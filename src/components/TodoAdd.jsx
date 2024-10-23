import {useState} from "react";

// eslint-disable-next-line react/prop-types
export const TodoAdd = ({ onNewTodo}) => {
    const [description, setDescription] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault()
        if(description.trim().length === 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo( newTodo )
        setDescription("");
    }

    return (
        <form onSubmit = { (event) => onFormSubmit(event) }>
            <input
                type ="text"
                placeholder="Tarea"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}