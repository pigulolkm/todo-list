

const BlogList = (props) => {
    const blogs = props.blogs;

    return (
        <div className="px-3 py-4 mx-5">
            {
                blogs.map((blog) => (
                    <div className="px-3 py-4 mx-5" key={ blog.id }>
                        <h2 className="text-pink-600 font-bold">{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                ))
            }
        </div>
    );
}


export default BlogList;