import {useQuery} from "@tanstack/react-query";
import {fetchPostList} from "../../api/Post";
import {Loader} from "../Loader";
import {PostListView} from "./PostListView";
import {queryClient} from "../../api/queryClients.ts";

export const FetchPostListView = () => {
    const postListQuery = useQuery({
            queryFn: () => fetchPostList(),
            queryKey: ["posts"], //кеш
        },
        queryClient // данные подключения - одна для все
    )

    switch (postListQuery.status) {
        case "pending":
            return <Loader/>;
        case "success":
            return <PostListView postList={postListQuery.data.list}/>;
        case "error":
            return (
                <div>
                    <span>Произошла ошибка :( </span>
                    <button onClick={postListQuery.refetch}>Повторить запрос</button>
                </div>
            );
        default:
            return "Ни чего не произошло";
    }
}