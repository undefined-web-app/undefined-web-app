import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createReviewThunk} from "../services/reviews-thunk";
import {useParams} from "react-router-dom";

const PostReview = () => {
    // const imdbID = useParams().imdbID;
    let [whatsYourOpinion, setWhatsYourOpinion] = useState('');
    let [score, setScore] = useState(10);
    const dispatch = useDispatch();
    const publishClickHandler = () => {
        const newReview = {
            username: "liuhantong",
            content: whatsYourOpinion,
            score: score,
            time: Date.now(),
            // imdbID: imdbID,
            imdbID: "tt0372784"
        }
        dispatch(createReviewThunk(newReview));
    }

    const checkBoxOnCheck = (e) => { console.log(e.target.value); setScore(parseInt(e.target.value)) }

    return (
        <div className="row border border-primary mt-3 mb-3 pb-2">
            <div className="col-10">
        <div className="row mt-2 text-center">
            <div className="col-2 h4">
                Score
            </div>
            <div className="col-10">
                <div className="row">
                <form>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                               value="1" onClick={checkBoxOnCheck}></input>
                            <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                               value="2" onClick={checkBoxOnCheck}></input>
                            <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                               value="3" onClick={checkBoxOnCheck}></input>
                            <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                               value="4" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                               value="5" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6"
                               value="6" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio6">6</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7"
                               value="7" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio7">7</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8"
                               value="8" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio8">8</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9"
                               value="9" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio9">9</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10"
                               value="10" onClick={checkBoxOnCheck}></input>
                        <label className="form-check-label" htmlFor="inlineRadio10">10</label>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div className="row mt-2 text-center">
            <div className="col-2 h4">
                Review
            </div>
            <div className="col-10">
               <textarea value={whatsYourOpinion} placeholder="What's Your Opinion?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsYourOpinion(event.target.value)}>
               </textarea>
            </div>
        </div>
            </div>
            <div className="col-2 mt-2 d-flex justify-content-center">
                <button className="rounded-pill btn btn-primary"
                        onClick={publishClickHandler}>
                    Publish My Review
                </button>
            </div>
        </div>
    );
}
export default PostReview;