import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

const ratingSlice = createSlice({
    name: 'filterRating',
    initialState,
    reducers: {
        changeRating: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeRating } = ratingSlice.actions

export default ratingSlice.reducer
