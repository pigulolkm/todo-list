import { useEffect, useState } from "react";
import { TodoList } from "./todolist"

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Go home', body: '', enabled: true },
        { id: 2, title: 'Go home 2', body: '', enabled: false },
        { id: 3, title: 'Go home 3', body: '', enabled: false },
    ]);

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
        console.log('rendered');
    });

    return (
        <div className="home">
            {
                <TodoList todos={todos} title='Todo' handleUpdate={handleUpdate} />
            }
        </div>
    );
}
 
export default Home