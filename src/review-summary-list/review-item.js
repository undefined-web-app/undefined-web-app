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
    const contentCol = disable === 'Score' ? 'col-4 col-xl-4 col-md-6' : 'col-4 col-xl-4 col-md-6';
    return (
        <li className="list-group-item">
            <div className="row mydivouter">
                {
                    currentUser && currentUser.type === "ADMIN" && review.score !== 'Score' &&
                    <button className="mybuttonoverlap mybuttonoverchange" onClick={deleteReviewHandler}>
                        <span className="delete-button-text">Delete Review</span>
                    </button>
                }
                <div className="col-4 col-md-2">
                    {
                        review.score === 'Score' ? review.username :
                        <Link to={"/profile/" + review.username}>
                            {review.username}
                        </Link>
                    }
                </div>
                {
                    disable !== 'imdbID' &&
                    <div className="col-4 col-md-2">
                        {review.imdbID === 'IMDB' && <div> {review.imdbID} </div>}
                        {review.imdbID !== 'IMDB' && <Link to={`/detail/${review.imdbID}`}> {review.imdbID} </Link>}
                    </div>
                }
                <div className="col-2 d-none d-xl-block">
                    {typeof review.time === "string" ? review.time : postDate}
                </div>
                <div className={contentCol}>
                    {review.content}
                </div>
                {
                    disable !== "Score" &&
                    <div className='col-1 text-warning d-flex justify-content-end d-none d-md-block'>
                        {review.score}
                    </div>
                }
            </div>
        </li>
    )
}

export default ReviewSummaryListItem;
