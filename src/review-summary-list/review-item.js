import React from "react";
import {timeConverter} from "../utility";
import reviewSummaryList from "./index";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/reviews-thunk";

const ReviewSummaryListItem = ({review, disable}) => {
    const postDate = timeConverter(review.time);
    const { currentUser } = useSelector((state) => state.users);
    // const contentWidth = disable === 'imdbID' ? 'col-6' : 'col-4';
    // const scoreText = review.score === 'Score' ? 'col-2' : 'col-2 text-warning';
    const dispatch = useDispatch();
    const deleteReviewHandler = () => {
        console.log(review._id);
        dispatch(deleteReviewThunk(review._id));
    }
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
                {
                    disable !== 'imdbID' &&
                    <div className="col-1">
                       <Link to={`/detail/${review.imdbID}`}> {review.imdbID} </Link>
                    </div>
                }
                <div className='col-1 text-warning d-flex justify-content-center'>
                    {review.score}
                </div>
                <div className="col-2">
                    {typeof review.time === "string" ? review.time : postDate}
                </div>
                <div className='col'>
                    {review.content}
                </div>
                {
                    currentUser !== null && currentUser.type === 'ADMIN' && review.score !== 'Score' &&
                    <div className='col-1 d-flex justify-content-center'>
                        <button className="btn btn-danger" onClick={deleteReviewHandler}>Delete</button>
                    </div>
                }
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
