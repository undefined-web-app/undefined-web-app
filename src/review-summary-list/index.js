import {useSelector} from "react-redux";
import ReviewSummaryListItem from "./review-item";

const ReviewSummaryList = () => {
    const {reviews, loading} = useSelector(
        (state) => state.reviews);
    return (
        <ul className="list-group border border-primary">
            <li className="list-group-item fw-bold">
                Review Summary List
            </li>
            {
                reviews.map(review =>
                    <ReviewSummaryListItem review={review}/>
                )
            }
        </ul>
    );
};

export default ReviewSummaryList;