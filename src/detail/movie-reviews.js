import React, {useEffect, useState} from "react";
import * as reviewService from "../services/reviews-service.js";
import ReviewItem from "./review-item";

const MovieReviews = (
    {
        imdbID
    }
) =>{
    const[reviews,serReviews] = useState();
    const findreview = async (imdbID) =>{
        const reviewData = await reviewService.findReviewsByIMDBID(imdbID);
        serReviews(reviewData);
    }
    useEffect(() => {
        findreview(imdbID);
    }, [])

    return(
        <ul className={"list-group"}>
            {
                reviews !== undefined &&
                reviews.map(review=>
                <ReviewItem key={review._id} review={review}/>)
            }
        </ul>
    )
}
export default MovieReviews;
