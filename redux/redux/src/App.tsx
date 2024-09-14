import {useState} from 'react'
import './App.css'

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
            <label htmlFor="">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
            </label>

            <ol>
                {
                    todos.map(todo => <li key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplite(todo.id)}/>
                            <span>{todo.text}</span>
                        </label>
                        <span style={{
                            color: 'red',
                            cursor: "pointer"
                        }} onClick={() => removeTodo(todo.id)}>&times;</span>
                    </li>)
                }
            </ol>
        </>
    );
}

export default App
