import reviews from './reviews.json';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    reviews: reviews,
    loading: false
};

const reviewsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {},
    reducers: {}
});

// export const {createReview, deleteReview} = reviewsSlice.actions;
export default reviewsSlice.reducer;