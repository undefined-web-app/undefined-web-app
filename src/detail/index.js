import MovieDescription from "./movie-desciption";

import ReviewsPost from "../review-summary-list/reviews-post";
import React from "react";
import {useParams} from "react-router-dom";

import ReviewSummaryList from "../review-summary-list";



const Detail = () => {
    var imdbID = useParams().imdbID;
    return (
        <div>
            <div className={"mb-3"}>
                <MovieDescription imdbID={imdbID}/>
            </div>
            <div className={"mb-3"}>
                <ReviewSummaryList imdbID={imdbID} title={'Reviewers\' Reviews'} type={'REVIEWER'}/>
            </div>
            <div className={"mb-3"}>
                <ReviewSummaryList imdbID={imdbID} title={'Normal Users\' Reviews'} type={'NORMAL_USER'} disable={'Score'}/>
            </div>
            <div className={"mb-3"}>
                <ReviewsPost imdbID={imdbID}/>
            </div>
        </div>
    );
};
export default Detail;
