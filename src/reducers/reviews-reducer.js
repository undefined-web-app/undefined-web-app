import {createSlice} from "@reduxjs/toolkit";
import {findReviewsThunk, createReviewThunk} from "../services/reviews-thunk";

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
        [createReviewThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.reviews.unshift(payload);
            },
    }
});

export default reviewsSlice.reducer;