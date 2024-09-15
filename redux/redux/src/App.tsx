import {useState} from 'react';
import {useDispatch} from "react-redux";
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";
import {addTodo} from "./store/todoSlice.ts";

import './App.css';

function App() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('')
    };

    return (
        <>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
            <TodoList/>
        </>
    );
}

export default App
