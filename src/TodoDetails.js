import { useParams } from "react-router-dom";

const TodoDetail = () => {
    const {id} = useParams();

    return (
        <div className="px-3 py-4 mx-5 border-solid border-b-2 border-slate-100">Todo Item - {id}</div>
    );
}

export { TodoDetail };