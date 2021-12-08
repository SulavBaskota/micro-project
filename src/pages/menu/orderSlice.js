import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tableId: '',
    orderList: [],
    total: 0,
    itemCount: 0
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setTableId: (state, action) => {
            state.tableId = action.payload
        },
        addOrder: (state, action) => {
            return {
                ...state,
                orderList: [
                    ...state.orderList,
                    {
                        itemId: action.payload.itemId,
                        name: action.payload.itemName,
                        quantity: 1,
                        price: Number(action.payload.itemPrice)
                    }
                ],
                itemCount: state.itemCount + 1,
                total: state.total + Number(action.payload.itemPrice)
            }
        },
        removeOrder: (state, action) => {
            return {
                ...state,
                orderList: state.orderList.filter(order => order.itemId !== action.payload.itemId),
                itemCount: state.itemCount - 1,
                total: state.total - Number(action.payload.itemPrice)
            }
        },
        increment: (state, action) => {
            return {
                ...state,
                orderList: state.orderList.map(order => {
                    if (order.itemId !== action.payload.itemId) {
                        return order
                    }
                    return {
                        ...order,
                        quantity: order.quantity + 1
                    }
                }),
                itemCount: state.itemCount + 1,
                total: state.total + Number(action.payload.itemPrice)
            }
        },
        decrement: (state, action) => {
            return {
                ...state,
                orderList: state.orderList.map(order => {
                    if (order.itemId !== action.payload.itemId) {
                        return order
                    }
                    return {
                        ...order,
                        quantity: order.quantity - 1
                    }
                }),
                itemCount: state.itemCount - 1,
                total: state.total - Number(action.payload.itemPrice)
            }
        }

    }
})

export const { setTableId, addOrder, removeOrder, increment, decrement } = orderSlice.actions;

export const selectTableId = state => state.order.tableId
export const selectOrderList = state => state.order.orderList
export const selectItemCount = state => state.order.itemCount
export const selectTotal = state => state.order.total

export default orderSlice.reducer;
