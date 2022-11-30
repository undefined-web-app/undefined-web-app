import MovieDescription from "./movie-desciption";
import MovieReviews from "./movie-reviews";
import ReviewsPost from "./reviews-post";
import React from "react";
import {useParams} from "react-router-dom";


const Detail = () => {
    var imdbID = useParams().imdbID;
    return (
        <div>
            <div className={"mb-3"}>
                <MovieDescription imdbID={imdbID}/>
            </div>
            <div className={"mb-3"}>
                <MovieReviews imdbID={imdbID}/>
            </div>
            <div className={"mb-3"}>
                <ReviewsPost imdbID={imdbID}/>
            </div>
        </div>
    );
};
export default Detail;
