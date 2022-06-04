import "./styles/todolist.css"

const TodoList = ({ todos, title, handleUpdate}) => {

    return (
        <div className="todo-item">
            <h2>{ title }</h2>
            {
                todos.map((todo) => {
                    return(
                        <div className="todo-preview" key={todo.id}>
                            <h2>{ todo.title }</h2>
                            <input type="checkbox" checked={todo.enabled} onChange={(e) => handleUpdate(todo.id, e.target.checked)}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export { TodoList };