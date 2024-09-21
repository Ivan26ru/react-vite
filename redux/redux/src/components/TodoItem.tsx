import {useDispatch} from "react-redux";
import {toggleComplete, removeTodo} from "../store/todoSlice.ts";

const TodoItem = ({
                      id,
                      text,
                      completed,
                  }) => {
    const dispatch = useDispatch();

    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={completed} onChange={() => dispatch(toggleComplete({id}))}/>
                <span>{text}</span>
            </label>
            <a style={{
                color: 'red',
                cursor: "pointer"
            }} onClick={() => dispatch(removeTodo({id}))}>&times;</a>
        </li>
    )
}

export default TodoItem
