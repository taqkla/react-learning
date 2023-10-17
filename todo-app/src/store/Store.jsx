import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoReducer.jsx';

export const store = configureStore({
    reducer: todoReducer
})