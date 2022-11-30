import MovieDescription from "./movie-desciption";
import ReviewsPost from "../review-summary-list/reviews-post";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findBookMarkThunk1} from "../services/bookmark-thunk";
import * as bookService from "../services/bookmark-service";
import ReviewSummaryList from "../review-summary-list";

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
                <ReviewSummaryList imdbID={imdbID} title={'Reviews'}/>
            </div>
            <div className={"mb-3"}>
                <ReviewsPost imdbID={imdbID}/>
            </div>
        </div>
    );
};
export default Detail;
