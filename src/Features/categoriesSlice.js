import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const fetchCategories = createAsyncThunk('/categories/fetchCategories', async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();

    const menu = [
        "https://catherineasquithgallery.com/uploads/posts/2021-02/1613566938_217-p-fon-dlya-prezentatsii-po-informatike-245.jpg",
        "https://krot.info/uploads/posts/2021-02/1613793900_6-p-fon-dlya-yuvelirnikh-ukrashenii-7.jpg",
        "https://previews.123rf.com/images/serezniy/serezniy1809/serezniy180942478/108760815-set-of-stylish-male-clothes-on-wooden-background.jpg",
        "https://previews.123rf.com/images/belchonock/belchonock1802/belchonock180292505/96250535-women-clothing-on-bed-background.jpg"
    ]

    const arr = []
    data.map((item, i) => {
        const obj = {
            categories: item,
            img: menu[i], 
        }
        
        arr.push(obj)
    })

    return arr;
})


const initialState = {
    isLoading: false,
    categories: [],
    category: {},
    error: "Error"
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getSingleCategory: (state, action) => {
            const category = state.categories.filter(item => item.categories.includes(action.payload))
            state.category = category[0].categories
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state,action) => {
            state.isLoading = true
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, (state,action) => {
            state.error = action.error.message;
        })
    }
})

export const {getSingleCategory} = categoriesSlice.actions
export default categoriesSlice.reducer;