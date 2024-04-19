import {z} from "zod";
import {useEffect, useState} from "react";

const PostSchema = z.object({
    id: z.string(),
    text: z.string(),
    authorId: z.string(),
    createdAt: z.number(),
})

export type Post = z.infer<typeof PostSchema>;
export const PostList = z.array(PostSchema);

export type PostList = z.infer<typeof PostList>;

export const FetchPostListSchema = z.object({
    list: PostList,
})

type FetchPostListResponse = z.infer<typeof FetchPostListSchema>;


// состояния запросов

interface IdleRequestState {
    status: "Idle";
}

interface LoadingRequestState {
    status: "Pending";
}

interface SuccessRequestState {
    status: "Success";
    data: PostList;
}

interface ErrorRequestState {
    status: "Error";
    data: unknown;
}

type RequestState =
    | IdleRequestState
    | LoadingRequestState
    | SuccessRequestState
    | ErrorRequestState;



export function usePostList() {
    const [state, setState] = useState<RequestState>({status: "Idle"});

    useEffect(() => {
        if (state.status === "Pending") {
            fetchPostList()
                .then((data) => {
                    setState({status: "Success", data: data.list})
                })
                .catch((error) => {
                    setState({status: "Error", data: error});
                });
        }
    }, [state]);

    useEffect(() => {
        setState({status: "Pending"});
    }, []);

    const refetch = () => {
        setState({status: "Pending"});
    }

    return {
        state,
        refetch,
    };
}

export function fetchPostList(): Promise<FetchPostListResponse> {
    return fetch("/api/posts")
        .then((response) => response.json())
        .then((data) => FetchPostListSchema.parse(data));
}