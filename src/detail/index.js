import MovieDescription from "./movie-desciption";
import React from "react";
import {useParams} from "react-router-dom";

const Detail = () => {
    var imdbID = useParams().imdbID;
    return (
        <div>
            <MovieDescription imdbID={imdbID}/>
        </div>
    );
};
export default Detail;
