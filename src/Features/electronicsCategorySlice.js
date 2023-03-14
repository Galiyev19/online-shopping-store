import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchElectronics = createAsyncThunk("/categories/electronics", async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();

    return data
})


const initialState = {

}

const ElectronicsCategorySlice = createSlice({
    name: "electronics",
    initialState,
    
})