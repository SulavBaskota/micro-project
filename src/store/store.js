import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../pages/menu/menuSlice'
import orderReducer from '../pages/order/orderSlice'
import pendingOrdersReducer from '../pages/kitchen/pendingOrdersSlice'
import unpaidOrdersReducer from '../pages/counter/unpaidOrdersSlice'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        order: orderReducer,
        pendingOrders: pendingOrdersReducer,
        unpaidOrders: unpaidOrdersReducer,
    }
})