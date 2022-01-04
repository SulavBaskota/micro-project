import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    tableId: '',
    orderList: [],
    total: 0,
    itemCount: 0,
    status: 'idel'
}

export const sendOrder = createAsyncThunk(
    'order/sendOrder', async newOrder => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                credentials: 'same-origin'
            },
            body: JSON.stringify(newOrder),
        }
        return await fetch('/orders/place-order/', options)
            .then(res => res.json())
            .then(data => data.message)
            .catch((err) => console.log(err.message))
    }
)

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
    },
    extraReducers(builder) {
        builder
            .addCase(sendOrder.fulfilled, (state, action) => { 
                state.status = 'succeeded'
                state.orderList = []
                state.total = 0
                state.itemCount = 0
                console.log(action.payload)
            })
    }
})

export const { setTableId, addOrder, removeOrder, increment, decrement } = orderSlice.actions

export const selectStatus = state => state.order.status
export const selectTableId = state => state.order.tableId
export const selectOrderList = state => state.order.orderList
export const selectItemCount = state => state.order.itemCount
export const selectTotal = state => state.order.total

export default orderSlice.reducer
