import React from "react";
import {timeConverter} from "../utility";
import reviewSummaryList from "./index";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/reviews-thunk";

const ReviewSummaryListItem = ({review, disable}) => {
    const postDate = timeConverter(review.time);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const deleteReviewHandler = () => {
        dispatch(deleteReviewThunk(review._id));
    }
    const contentCol = disable === 'Score' ? 'col-5' : 'col-4';
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
                    <div className={'col-2'}>
                        {review.imdbID === 'IMDB' && <div> {review.imdbID} </div>}
                        {review.imdbID !== 'IMDB' && <Link to={`/detail/${review.imdbID}`}> {review.imdbID} </Link>}
                    </div>
                }
                <div className="col-2">
                    {typeof review.time === "string" ? review.time : postDate}
                </div>
                <div className={contentCol}>
                    {review.content}
                </div>
                {
                    disable !== "Score" &&
                    <div className='col-1 text-warning d-flex justify-content-center'>
                        {review.score}
                    </div>
                }
                {
                    currentUser && currentUser.type === 'ADMIN' && review.score !== 'Score' &&
                    <div className='col-1 d-flex justify-content-center'>
                        <button className="btn btn-danger" onClick={deleteReviewHandler}>Delete</button>
                    </div>
                }
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
