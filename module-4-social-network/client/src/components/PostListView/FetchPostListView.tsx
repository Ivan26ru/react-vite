import {usePostList} from "../../api/Post";
import {Loader} from "../Loader";
import {PostListView} from "./PostListView";

export const FetchPostListView = () => {
    const {state, refetch} = usePostList();
    return <div>d2sfa</div>;

    switch (state.status) {
        case "idle":
        case "pending":
            return <Loader/>;
        case "success":
            return <PostListView postList={state.data}/>;
        case "error":
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