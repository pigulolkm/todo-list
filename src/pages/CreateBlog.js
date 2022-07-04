import { useState } from "react";

const CreateBlog = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');


    return (
        <div className="max-w-md mx-auto my-0 text-center">
            <h2 className="text-xl font-bold text-pink-600 m-10">Add a new item</h2>
            <form>
                <label className="text-left block">Blog title:</label>
                <input 
                    type="text" 
                    required value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full py-1 px-2 my-2 mx-0 border-solid border-slate-200 border-2 box-border block" />

                <label className="text-left block">Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full py-1 px-2 my-2 mx-0 border-solid border-slate-200 border-2 box-border block" 
                >
                </textarea>

                <label className="text-left block">Blog title:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full py-1 px-2 my-2 mx-0 border-solid border-slate-200 border-2 box-border block">
                    <option value="mario">mario</option>
                    <option value="luige">luige</option>
                </select>
                <button className="bg-pink-600 text-slate-100 border-0 p-2 rounded-lg cursor-pointer">Submit</button>                
            </form>
        </div>
    );
}
 
export default CreateBlog;