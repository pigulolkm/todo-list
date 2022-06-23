const TodoList = ({ todos, title, handleUpdate}) => {

    return (
        <div className="text-2xl">
            <h2>{ title }</h2>
            {
                todos.map((todo) => {
                    return(
                        <div className="px-3 py-4 mx-5 border-solid border-b-2 border-slate-100 hover:bg-green-300 hover:cursor-pointer" key={todo.id} onClick={(e) => handleUpdate(todo.id, !todo.enabled)}>
                            <input className="m-3" type="checkbox" checked={todo.enabled} onChange={(e) => handleUpdate(todo.id, e.target.checked)}/>
                            <span className="text-xl">{ todo.body }</span>
                            <span className=""></span>
                        </div>
                    );
                })
            }
        </div>
    );
}

export { TodoList };