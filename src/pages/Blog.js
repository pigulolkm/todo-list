import BlogList from "./BlogList";
import useFetch from "../useFetch.js";

const Blog = () => {
    const {data: blogs, setData: setBlogs, isLoadingBlogs, errorBlogs} = useFetch('http://localhost:8000/blogs');

    console.log(blogs);

    return (
        <div>
            { errorBlogs && <div>{ errorBlogs }</div> }
            { isLoadingBlogs && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title='Blog' /> }
        </div>
    );
}

export default Blog;