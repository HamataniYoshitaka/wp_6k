import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        categories: [],
        openingShown: false,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setOpeningShown: (state, action) => {
            state.openingShown = action.payload
        }
    }
})

export const { setCategories, setOpeningShown } = productSlice.actions

export default productSlice.reducer