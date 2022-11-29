import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const findReviewsThunk = createAsyncThunk(
    'reviews/findReviews', async () => {
        return await service.findReviews();
    }
)

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async (review) => {
        return await service.createReview(review);
    }
    )
