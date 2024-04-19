import {z} from "zod";
import {useEffect, useState} from "react";
import {validateReponse} from "./validateResponse.ts";

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
    status: "idle";
}

interface LoadingRequestState {
    status: "pending";
}

interface SuccessRequestState {
    status: "success";
    data: PostList;
}

interface ErrorRequestState {
    status: "error";
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
        if (state.status === "pending") {
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
        setState({status: "pending"});
    }, []);

    const refetch = () => {
        setState({status: "pending"});
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

export function createPost(text: string): Promise<void>{
    return fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
        }),
    })
        .then(validateReponse)
        .then(()=>undefined)
}