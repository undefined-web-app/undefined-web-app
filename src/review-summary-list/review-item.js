import React from "react";
import {timeConverter} from "../utility";
import reviewSummaryList from "./index";
import {Link} from "react-router-dom";

const ReviewSummaryListItem = ({review}) => {
    const postDate = timeConverter(review.time);
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {
                        review.score === 'Score' ? review.username :
                        <Link to={"/profile/" + review.username}>
                            {review.username}
                        </Link>
                    }
                </div>
                <div className="col-2">
                    {review.imdbID}
                </div>
                <div className="col-4">
                    {review.content}
                </div>
                <div className="col-2">
                    {review.score}
                </div>
                <div className="col-2">
                    {typeof review.time === "string" ? review.time : postDate}
                </div>
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
