import {useState} from 'react';
import TodoList from "./components/TodoList.tsx";

import {useGetTodosQuery, useAddProductMutation, useDeleteTodoMutation} from "./store/todosApi";

import './App.css';

function App() {
    const [text, setText] = useState('')
    // const dispatch = useDispatch();

    //
    // const addTask = () => {
    //     dispatch(addTodo({text}))
    //     setText('')
    // };

    const [count, setCount] = useState(10);
    const [newTodo, setNewTodo] = useState('');
    const {data = [], isLoading} = useGetTodosQuery(count);
    const [addTodo, {isError}] = useAddProductMutation();

    const [deleteTodo] = useDeleteTodoMutation();

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id).unwrap();
    }
    const handleAddTodo = async () => {
        if (newTodo) {
            await addTodo(
                {
                    title: newTodo,
                    body: 'test',
                    userId: 1
                }
            ).unwrap();
            console.log(newTodo)
            setNewTodo('');
        }
    }

    if (isLoading) return <h1>Loading...</h1>


    return (
        <>
            {/*<InputField */}
            {/*    text={text} */}
            {/*    handleInput={setText} */}
            {/*    handleSubmit={addTask}*/}
            {/*/>*/}
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={handleAddTodo}>Add todo</button>
            <TodoList/>

            <select name="" id="" value={count} onChange={(e) => setCount(e.target.value)}>
                <option value="">all</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id} onClick={() => handleDeleteTodo(item.id)}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
}

export default App
