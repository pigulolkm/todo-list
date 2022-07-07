import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history("/pages/blog");
        })
    }

    return (
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2 className="text-xl font-bold text-pink-600">{ blog.title }</h2>
                    <p>Written by { blog.author } </p>
                    <div className="mt-5">{ blog.body }</div>
                    <button className="border-pink-600 border-2 border-solid p-2 mt-4 text-pink-600 hover:text-white hover:border-white hover:bg-pink-600" onClick={() => handleDelete()}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;