import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../pages/menu/menuSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
    }
})