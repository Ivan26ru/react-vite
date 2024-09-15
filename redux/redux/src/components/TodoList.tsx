import TodoItem from "./TodoItem";

const TodoList = ({
                      todos,
                      toggleTodoComplite,
                      removeTodo
                  }) => {
    console.log(todos)
    return (
        <ol>
            {
                todos.map(todo =>
                    <TodoItem
                    key={todo.id}
                    removeTodo = {removeTodo}
                    toggleTodoComplite={toggleTodoComplite}
                    {...todo}
                    />
                )
            }
        </ol>
    )
}

export default TodoList
