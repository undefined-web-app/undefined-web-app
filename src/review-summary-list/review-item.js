import React from "react";

const ReviewSummaryListItem = ({review}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    {review.username}
                </div>
                <div className="col-8">
                    {review.content}
                </div>
                <div className="col-2">
                    {review.score}
                </div>
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
