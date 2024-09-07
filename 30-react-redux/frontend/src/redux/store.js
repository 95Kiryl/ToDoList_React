import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import errorReducer from './slices/errorSlice';
import booksReduser from './slices/booksSlice';

const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReducer,
        error: errorReducer
    },
});

export default store;