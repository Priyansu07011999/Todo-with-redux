import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todos/todo';
export const Store = configureStore({
    reducer: todoReducer
})