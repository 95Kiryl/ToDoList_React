import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksReduser from './slices/booksSlice';

const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReducer
    },
});

export default store;