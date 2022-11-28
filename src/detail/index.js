import MovieDescription from "./movie-desciption";
import MovieReviews from "./movie-reviews";
import React from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
    var imdbID = useParams().imdbID;
    return (
        <div>
            <MovieReviews imdbID={imdbID}/>
        </div>
    );
};
export default Detail;
