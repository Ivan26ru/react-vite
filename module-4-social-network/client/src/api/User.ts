import {z} from 'zod'
import {PostList} from "./Post";
import {useEffect, useState} from "react";

export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
})

export  type User = z.infer<typeof UserSchema>;

export function fetchUser(id: string): Promise<User> {
    return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then((data) => UserSchema.parse(data));
}

// состояния запросов

interface IdleRequestState {
    status: "Idle";
}

interface LoadingRequestState {
    status: "Loading";
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
        if (state.status === "pending") {
            fetchPostList()
                .then((data) => {
                    setState({status: "success", data: data.list})
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