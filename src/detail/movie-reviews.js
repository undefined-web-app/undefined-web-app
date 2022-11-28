import React, {useEffect} from "react";
import * as reviewService from "../services/reviews-service.js";
import {useDispatch} from "react-redux";
import {findReviewsThunk} from "../services/reviews-thunk";
import reviewItem from "./review-item";
const MovieReviews = (
    {
        imdbID
    }
) =>{

    const reviewData = reviewService.findReviewsByIMDBID(imdbID)
    console.log(reviewData);
    return(

        <ul>
            <li>
                {
                }
            </li>

        </ul>
    )
}
export default MovieReviews;