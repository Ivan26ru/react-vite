import {useQuery} from "@tanstack/react-query";
import {fetchMe} from "../api/User.ts";
import {Loader} from "./Loader";
import {AuthForm} from "./AuthForm";
import {PostForm} from "./PostForm";
import {queryClient} from "../api/queryClients.ts";

/**
 * Получает текущего пользователя, если он авторизован
 * @constructor
 */
export const Account = () => {
    const meQuery = useQuery({
            queryFn: () => fetchMe(),
            queryKey: ["users", "me"],
        },
        queryClient // данные подключения - одна для все
    );

    switch (meQuery.status) {
        case "pending":
            return <Loader/>;
        case "error":
            return <AuthForm/>;
        case "success":
            return <PostForm/>;
        default:
    }
};