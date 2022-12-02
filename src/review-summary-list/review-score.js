import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {CreateBookMarkThunk} from "../services/bookmark-thunk";
import {updateUserThunk} from "../users/users-thunks";
import {findReviewsThunk} from "../services/reviews-thunk";
import {useNavigate, useParams} from "react-router-dom";

const ReviewScore = ({imdbID}) => {
    var title = useParams().title;
    const { reviews } = useSelector((state) => state.reviews);
    const [score, setScore] = useState('No Score');
    const dispatch = useDispatch();
    const findAvScore = async () => {
        const curReview = reviews.filter(r => r.imdbID === imdbID && r.type === "REVIEWER");
        console.log(imdbID);
        if (curReview.length > 0) {
            let total = 0
            curReview.map(r => r.score ? total += r.score : 0);
            setScore((total / curReview.length).toFixed(1));
        }
        else {
            setScore('No Score');
        }
    }
    useEffect(() => {
        findAvScore();
    }, [reviews, imdbID])
    useEffect(() => {dispatch(findReviewsThunk())}, [])
    return (
        <h2 className={"text-warning"}>{score}</h2>
    )
}

export default ReviewScore;