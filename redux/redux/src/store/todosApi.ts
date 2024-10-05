import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (build) => ({
        getTodos: build.query({
            query: (limit = '') => `todos?${limit && `_limit=${limit}`}`,
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'todos',
                method: 'POST',
                body
            })
        })
    })
});

export const {useGetTodosQuery, useAddProductMutation} = todosApi;
