import {usePostList} from "../../api/Post";
import {Loader} from "../Loader";
import {PostListView} from "./PostListView";

export const FetchPostListView = () => {
    const {state, refetch} = usePostList();

    switch (state.status) {
        case "Idle":
        case "Pending":
            return <Loader/>;
        case "Success":
            return <PostListView postList={state.data}/>;
        case "Error":
            return (
                <div>
                    <span>Произошла ошибка :(</span>
                    <button onClick={refetch}>Повторить запрос</button>
                </div>
            );
        default:
            return "Ни чего не произошло";
    }
}