import {z} from 'zod'
import {PostList} from "./Post.ts";

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
    const [] = useState({ status: "Idle" });
}