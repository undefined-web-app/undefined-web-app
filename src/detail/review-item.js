import * as utilities from "../utility/index"

const ReviewItem = (
    {
        review
    }
) =>{


    const time = utilities.timeConverter(review.time);
    return(
        <li className={"list-group-item"}>
            <div className={"row"}>
                <div className={"col-2"}>
                    <p className={""}>
                        {review.username}
                    </p>
                    <p>
                        {time}
                    </p>
                </div>
                <div className={"col-8 text-center"}>
                    <p >
                        {review.content}
                    </p>
                </div>
                <div className={"col-2 text-center"}>
                    <h2 className={"text-warning"}>
                        {review.score}
                    </h2>
                </div>
            </div>
        </li>
    )
}
export default ReviewItem;