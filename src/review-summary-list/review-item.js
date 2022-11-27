import React from "react";
import {timeConverter} from "../utility";

const ReviewSummaryListItem = ({review}) => {
    const postDate = timeConverter(review.time);
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {review.username}
                </div>
                <div className="col-6">
                    {review.content}
                </div>
                <div className="col-2">
                    {review.score}
                </div>
                <div className="col-2">
                    {postDate}
                </div>
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
