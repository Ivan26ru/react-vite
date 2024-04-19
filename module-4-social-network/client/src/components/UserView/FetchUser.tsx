import {FC} from 'react';
import {useQuery} from "@tanstack/react-query";
import {fetchUser} from "../../api/User.ts";
import {queryClient} from "../../api/queryClients.ts";
import {Loader} from "../Loader";
import {UserView} from "./UserView.tsx";

interface FetchUserViewProps {
    userId: string;
}

export const FetchUserView: FC<FetchUserViewProps> = ({userId}) => {
    const userQuery = useQuery({
            queryFn: () => fetchUser(userId),
            queryKey: ["users", userId],

        },
        queryClient
    );

    switch (userQuery.status) {
        case "pending":
            return <Loader/>
        case "success":
            return <UserView user={userQuery.data}/>
        case "error":
            return <div>
                <span>Произошла ошибка :(</span>
                <button onClick={() => userQuery.refetch()}>
                    Попробовать еще раз
                </button>
            </div>;
    }
}