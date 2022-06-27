import { ReactComponent as IconListItem } from './icons/svg/list-arrow.svg'
import { Link } from 'react-router-dom';
const TodoList = ({ todos, title, parentId, handleUpdate}) => {

    return (
        <div className="text-2xl">
            <h2>{ title }</h2>
            {
                todos.map((todo) => {
                    if(todo.type === "simple")
                    {
                        return(
                            <div className="px-3 py-4 mx-5 border-solid border-b-2 border-slate-100 hover:bg-green-300 hover:cursor-pointer" key={todo.id} onClick={(e) => handleUpdate(todo.id, !todo.enabled)}>
                                <input className="m-3" type="checkbox" checked={todo.enabled} onChange={(e) => handleUpdate(todo.id, e.target.checked)}/>
                                <span className="text-xl">{ todo.title }</span>
                            </div>
                        );
                    }
                    else if(todo.type === "list")
                    {
                        return (
                            <div className="px-3 py-4 mx-5 border-solid border-b-2" key={todo.id}>
                                <IconListItem className="h-5 w-5 m-2 inline text-black"/>
                                <span className="text-xl">{ todo.title }</span>
                                <TodoList todos={todo.list} parentId={todo.id} handleUpdate={handleUpdate}/>
                            </div>
                        );
                    }
                    else if(todo.type === "item")
                    {
                        return (
                            <div className="px-3 py-4 mx-5 border-solid border-b-2 border-slate-100 hover:bg-green-300 hover:cursor-pointer" key={todo.id} onClick={(e) => handleUpdate(todo.id, !todo.enabled)}>
                                <input className="m-3" type="checkbox" checked={todo.enabled} onChange={(e) => handleUpdate(todo.id, e.target.checked, parentId)}/>
                                <span className="text-xl">{ todo.title }</span>
                            </div>
                        );
                    }
                    else
                    {
                        return("");
                    }
                })
            }
        </div>
    );
}

export { TodoList };