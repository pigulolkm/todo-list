import { useEffect, useState } from "react";
import { TodoList } from "./todolist"

const Home = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleUpdate = (id, checked) => {
        
        /* ********* Method 1 
        let newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.id === id);
        newTodos[index].enabled = checked;
        setTodos(newTodos); */

        /* ********* Method 2 */ 
        /* let newTodos = [...todos];
        let updateTodo = newTodos.find(todo => todo.id === id);
        if(updateTodo !== undefined)
        {
            updateTodo.enabled = checked;
        }
        setTodos(newTodos);  */

        /* ********* Method 3 */
        /* const index = todos.findIndex(todo => todo.id === id);
        setTodos((todos) => 
            [
                ...todos.slice(0, index),
                {
                    ...todos[index],
                    enabled: checked,
                },
                ...todos.slice(index + 1)
            ]
        ); */

        /* ********* Method 4 */
        setTodos(todos.map(todo => {
            if(id === todo.id) {
                return { ...todo, enabled: checked }
            }
            return todo;
        })); 
        
        // TODO update the item seq to the bottom with strikethrough
    }

    useEffect(() => {
        fetch('http://localhost:8000/todos')
            .then(res => {
                if(!res.ok) {
                    throw Error(`${res.status} | ${res.statusText}`);
                }
                return res.json()  
            })
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { todos && <TodoList todos={todos} title='Todo' handleUpdate={handleUpdate} /> }
        </div>
    );
}
 
export default Home