import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../pages/menu/menuSlice'
import orderReducer from '../pages/menu/order/orderSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        order: orderReducer,
    }
})