import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchUnpaidOrders = createAsyncThunk(
    'unpaidOrders/fetchUnpaidOrders', async () => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                credentials: 'same-origin'
            },
        }
        return await fetch('/orders/show-unpaid-orders/', options)
            .then(res => res.json())
            .then(data => data.unpaidOrders)
            .catch((err) => console.log(err.message))
    }
)


export const markPaid = createAsyncThunk(
    'unpaidOrders/markPaid', async orderInfo => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                credentials: 'same-origin'
            },
            body: JSON.stringify(orderInfo),
        }
        return await fetch('/orders/mark-paid/', options)
            .then(res => res.json())
            .then(data => data.data)
            .catch((err) => console.log(err.message))
    }
)

const initialState = {
    unpaidOrdersList: [],
    status: 'idel'
}

const unpaidOrdersSlice = createSlice({
    name: 'unpaidOrders',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUnpaidOrders.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUnpaidOrders.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.unpaidOrdersList = action.payload
            })
            .addCase(markPaid.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload.message)
                return {
                    ...state,
                    unpaidOrdersList: state.unpaidOrdersList.filter(order =>
                        order.id !== action.payload.orderId
                    )
                }
            })
    }
})

export const selectUnpaidOrdersStatus = state => state.unpaidOrders.status
export const selectUnpaidOrders = state => state.unpaidOrders.unpaidOrdersList
export default unpaidOrdersSlice.reducer