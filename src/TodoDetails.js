import { useParams } from "react-router-dom"

const TodoDetail = () => {
    const {id} = useParams();

    return (
        <div className="todo-preview">Todo Item - {id}</div>
    );
}

export { TodoDetail };