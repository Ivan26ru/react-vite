import {configureStore} from "@reduxjs/toolkit";
import {todosApi} from "./todosApi"
import todoReducer from "./todoSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        [todosApi.reducerPath]: todosApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware)
})
