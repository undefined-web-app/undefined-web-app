import MovieDescription from "./movie-desciption";
import MovieReviews from "./movie-reviews";
import ReviewsPost from "./reviews-post";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findBookMarkThunk1} from "../services/bookmark-thunk";
import * as bookService from "../services/bookmark-service";

const Detail = () => {

    const {bookmark,loading} = useSelector(state => state.bookmarks)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findBookMarkThunk1())
    }, [])

    console.log(bookmark);
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
