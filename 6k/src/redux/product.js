import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        categories: [],
        openingShown: false,
        transitionStarter: false,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setOpeningShown: (state, action) => {
            state.openingShown = action.payload
        },
        setTransitionStarter: (state, action) => {
            state.transitionStarter = action.payload
        },

    }
})

export const { setCategories, setOpeningShown, setTransitionStarter } = productSlice.actions

export default productSlice.reducer