import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <ol>
            {
                todos.map(todo =>
                    <TodoItem
                    key={todo.id}
                    {...todo}
                    />
                )
            }
        </ol>
    )
}

export default TodoList
