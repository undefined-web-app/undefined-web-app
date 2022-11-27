import reviews from './reviews.json';
import {createSlice} from "@reduxjs/toolkit";
import {findReviewsThunk} from "../services/reviews-thunk";

const initialState = {
    reviews: [],
    loading: false
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsThunk.rejected]:
            (state) => {
                state.loading = false
            },
    }
});

export default reviewsSlice.reducer;