import {createSlice, nanoid} from "@reduxjs/toolkit"


const initialState = {
    shoppingCart: []
}

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addShoppingCart : (state, action) => {

            const idx = state.shoppingCart.findIndex(item => item.id === action.payload.id)
            
            if(!state.shoppingCart[idx] ){
                const obj = {
                    id: action.payload.id,
                    product: action.payload,
                    count: 1,
                    total: Math.floor(action.payload.price)
                }
                state.shoppingCart.push(obj)

            }else{
                return
            }    
            
        },
        increaseCount: (state,action) => {
            const idx = state.shoppingCart.findIndex(item => item.id === action.payload)
       
            state.shoppingCart[idx].count += 1;
            state.shoppingCart[idx].total = Math.floor(state.shoppingCart[idx].count * state.shoppingCart[idx].product.price)
        },
        decreaseCount: (state, action) => {
            const idx = state.shoppingCart.findIndex(item => item.id === action.payload)
            if(state.shoppingCart[idx].count === 1){
                return
            }else{
                state.shoppingCart[idx].count -= 1;
                state.shoppingCart[idx].total -= Math.floor(state.shoppingCart[idx].product.price)
            }
        },
        deleteItem: (state,action) => {
            const idx = state.shoppingCart.findIndex(item => item.id === action.payload)

            state.shoppingCart = [... state.shoppingCart.slice(0, idx), ... state.shoppingCart.slice(idx + 1)]
        },
        clearShoppingCart: (state,action) => {
            state.shoppingCart = []
        }
    }
})

export const  {addShoppingCart, increaseCount, decreaseCount, deleteItem,clearShoppingCart} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer