import {useDispatch, useSelector} from "react-redux";
import ReviewSummaryListItem from "./review-item";
import {useEffect} from "react";
import {findReviewsThunk} from "../services/reviews-thunk";

const ReviewSummaryList = () => {
    const {reviews, loading} = useSelector(
        (state) => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk())
        // eslint-disable-next-line
    }, [])

    return (
        <ul className="list-group border border-primary">
            <li className="list-group-item fw-bold">
                Review Summary List
            </li>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            { !loading &&
                reviews.map(review =>
                    <ReviewSummaryListItem review={review}/>
                )
            }
        </ul>
    );
};

export default ReviewSummaryList;