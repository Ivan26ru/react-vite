import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (build) => ({
        getTodos: build.query({
            query: (limit = '') => `todos?${limit && `_limit=${limit}`}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Todos' as const, id})),
                        {type: 'Todos', id: 'LIST'},
                    ]
                    : [{type: 'Todos', id: 'LIST'}],
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'todos',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        }),
        deleteTodo: build.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: `DELETE`,
            }),
            invalidatesTags: [{type: 'Todos', id: 'LIST'}]
        })
    })
});

export const {
    useGetTodosQuery,
    useAddProductMutation,
    useDeleteTodoMutation
} = todosApi;
