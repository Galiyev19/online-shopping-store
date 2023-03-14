import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"


const initialState = {
    orders: []
}


const orderSlice = createSlice ({
    name: "order",
    initialState,
    reducers: {
        AddOrder: (state,action) => {
            const date = new Date()
            const dateLocal = date.toLocaleString()
            const obj = {
                id: nanoid(),
                dateOrder: dateLocal,
                products: action.payload,
                totalOrdersPrice: action.payload.reduce((acc, item) => acc + item.total, 0)
            }

           state.orders.push(obj)
        }
    }
})

export const {AddOrder} = orderSlice.actions;
export default orderSlice.reducer;