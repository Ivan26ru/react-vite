const TodoItem = ({
                      id,
                      text,
                      completed,
                      removeTodo,
                      toggleTodoComplite
                  }) => {
    console.log(text)
    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={() => toggleTodoComplite(id)}/>
                <span>{text}</span>
            </label>
            <span style={{
                color: 'red',
                cursor: "pointer"
            }} onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}

export default TodoItem
