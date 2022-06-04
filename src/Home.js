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
        let newTodos = [...todos];
        let updateTodo = newTodos.find(todo => todo.id === id);
        if(updateTodo !== undefined)
        {
            updateTodo.enabled = checked;
        }
        setTodos(newTodos); 

        /* ********* Method 3
        const newTodos = todos.map(todo => {
            if(id === todo.id) {
                return { ...todo, enabled: checked }
            }
            return todo;
        }); 

        setTodos(newTodos);
        */

        // TODO update the item seq to the bottom with strikethrough
    }

    useEffect(() => {
        console.log('rendering');
        console.log(todos);
    });

    return (
        <div className="home">
            {
                <TodoList todos={todos} title='Todo' handleUpdate={handleUpdate}/>
            }
        </div>
    );
}
 
export default Home