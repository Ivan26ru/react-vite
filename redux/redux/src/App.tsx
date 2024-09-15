import {useState} from 'react'
import './App.css'
import TodoList from "./components/TodoList.tsx";
import InputField from "./components/InputField.tsx";

function App() {
    const [todos, setTodos] = useState([{
        id: 1,
        text: 'test1',
        completed: true,
    }]);
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter
            (
                todo => todo.id !== todoId
            )
        )
    }

    const toggleTodoComplite = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo;

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        )
    }

    return (
        <>
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTodo}
            />
            <TodoList todos={todos} toggleTodoComplite={toggleTodoComplite} removeTodo={removeTodo} />
        </>
    );
}

export default App
