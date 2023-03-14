import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "../Features/productsSlice"
import categoriesSlice from "../Features/categoriesSlice"
import shoppingCartSlice from "../Features/shoppingCartSlice";
import orderSlice from "../Features/orderSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        shoppingCart: shoppingCartSlice,
        order: orderSlice,
    }
})

export default store;