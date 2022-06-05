import "./styles/todolist.css"

const TodoList = ({ todos, title, handleUpdate}) => {

    return (
        <div className="todo-item">
            <h2>{ title }</h2>
            {
                todos.map((todo) => {
                    return(
                        <div className="todo-preview" key={todo.id} onClick={(e) => handleUpdate(todo.id, !todo.enabled)}>
                            <input className="todo-checkbox" type="checkbox" checked={todo.enabled} onChange={(e) => handleUpdate(todo.id, e.target.checked)}/>
                            <span className="todo-item">{ todo.body }</span>
                        </div>
                    );
                })
            }
        </div>
    );
}

export { TodoList };