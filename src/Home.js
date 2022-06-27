import { TodoList } from "./Todolist"
import useFetch from "./useFetch";

const Home = () => {
    const {data: todos, setData: setTodos,  isLoadingTodos, errorTodos} = useFetch('http://localhost:8000/todos');
    console.log(todos);

    const handleUpdate = (id, checked, parentId) => {
        console.log(id + ' ' + checked + ' ' + parentId);
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

    

    return (
        <div className="home">
            { errorTodos && <div>{ errorTodos }</div> }
            { isLoadingTodos && <div>Loading...</div> }
            { todos && <TodoList todos={todos} title='Todo' handleUpdate={handleUpdate} /> }
        </div>
    );
}
 
export default Home