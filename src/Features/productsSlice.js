import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'





export const fetchProducts = createAsyncThunk('/products/fetchProducts', async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data
})




const initialState = {
    idLoading: false,
    products: [],
    product: "",
    error: "Error"
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
       add: (state,action) => {
            const idx = state.products.findIndex(item => item.id === 5)
            state.product = idx
            console.log(state.product)
            // console.log(idx)
       }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state,action) => {
            state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.error = action.error.message;
        })

    }
})


export const {add} = productsSlice.actions
export default productsSlice.reducer