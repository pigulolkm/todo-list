import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2 className="text-xl font-bold text-pink-600">{ blog.title }</h2>
                    <p>Written by { blog.arthor } </p>
                    <div className="mt-5">{ blog.body }</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;