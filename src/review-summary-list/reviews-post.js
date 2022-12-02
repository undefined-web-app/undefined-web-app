import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk} from "../services/reviews-thunk";
import {Link} from "react-router-dom";

const ReviewsPost = (
    {
        imdbID
    }
) =>{
    const { currentUser } = useSelector((state) => state.users);
    let [score, setScore] = useState(10);
    let [content, setContent] = useState('');
    const onSlideChange = (e) => setScore(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const dispatch = useDispatch();
    const publishClickHandler = () => {
        const newReview = {
            username: currentUser.username,
            content: content,
            score: score,
            time: Date.now(),
            imdbID: imdbID,
            type: currentUser.type
        }
        dispatch(createReviewThunk(newReview));
    }
    const submitDisable = (currentUser && currentUser.type === "ADMIN") ? true : false;
    const disable = !currentUser;
    return(
        <ul className="list-group">
            <li className="list-group-item fw-bold"  >
                PUBLISH YOUR OWN REVIEW
            </li>
            <li className="list-group-item">
            <div className={"row mt-3"}>
                <div className={"col-2"}>
                    <label className={"float-start"}>Score:</label>
                </div>
                <div className={"col-8"}>
                    {currentUser && currentUser.type==="REVIEWER" && <input className={"form-range"} type="range" id="customRange3" min="0" max="10" onChange={onSlideChange} disabled={disable}/>}
                    {(!currentUser || currentUser.type !== "REVIEWER") && <div>ONLY LOGGED IN <span className="fw-bold">REVIEWER</span> CAN DROP A SCORE</div>}
                </div>
                {
                    currentUser && currentUser.type === "REVIEWER" &&
                    <div className={"col-1 ms-2"}>
                        {score >= 8 && <h2 className="text-success">{score}</h2>}
                        {5 <= score && score <= 7 && <h2 className="text-warning">{score}</h2>}
                        {0 <= score && score <= 4 && <h2 className="text-danger">{score}</h2>}
                    </div>
                }
            </div>
            <div className={"mt-4 row"}>
                <div className={"col-2"}>
                <label className={"float-start"}>Review:</label>
                </div>
                <div className={"col-8"}>
                    { currentUser && (currentUser.type === "REVIEWER" || currentUser.type === "NORMAL_USER") && <textarea className="form-control " id="exampleTextarea" rows="3" onChange={onContentChange} disabled={disable}></textarea> }
                    { (!currentUser || (currentUser && (currentUser.type === "ADMIN"))) && <div>ONLY LOGGED IN <span className="fw-bold">REVIEWER</span> OR <span className="fw-bold">NORMAL USER</span> CAN DROP A REVIEW</div>   }
                </div>
            </div>
                {
                    currentUser &&
                    <div className={"mt-3 text-center mb-3"}>
                        <button type="submit" className="btn btn-primary me-2" onClick={publishClickHandler} disabled={submitDisable}>Submit
                        </button>
                    </div>
                }
                {
                    !currentUser &&
                    <div className={"mt-3 text-center mb-3"}>
                        <h5 className="me-2">
                            <Link to="/login">Log in</Link> or <Link to="/register">Register</Link> to Publish Your Review
                        </h5>
                    </div>
                }
            </li>
        </ul>
    )
}
export default ReviewsPost;