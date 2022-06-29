import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;

    return (
        <div>
            <div className="px-3 py-4 mx-5">
                <Link className="p-2 border border-pink-600 text-pink-600 hover:text-white hover:border-white hover:bg-pink-600" to="/pages/createblog">+ Blog</Link>
            </div>
            {
                blogs.map((blog) => (
                    <div className="px-3 py-4 mx-5" key={ blog.id }>
                        <Link to={ `/pages/blog/${blog.id}` }>
                            <h2 className="text-pink-600 font-bold">{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}


export default BlogList;