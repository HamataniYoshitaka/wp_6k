import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        categories: [],
        posts: []
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setPosts: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { setCategories, setPosts } = productSlice.actions

export default productSlice.reducer