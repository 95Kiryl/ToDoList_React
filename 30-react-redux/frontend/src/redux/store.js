import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksReduser from './books/reducer';

const store = configureStore({
    reducer: {
        books: booksReduser,
        filter: filterReducer
    },
});

export default store;