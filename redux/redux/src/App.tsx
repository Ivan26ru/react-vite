import {useState} from 'react';
import {useDispatch} from "react-redux";
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";
import {addTodo} from "./store/todoSlice.ts";

import {useGetTodosQuery} from "./store/todosApi";

import './App.css';

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();


    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    };

    const {data = [], isLoading} = useGetTodosQuery();
    if (isLoading) return <h1>Loading...</h1>


    return (
        <>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
            {/*<TodoList/>*/}
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    );
}

export default App
