import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

import {CreateBookMarkThunk, findBookMarkThunk} from "../services/bookmark-thunk";
import ReviewScore from "../review-summary-list/review-score";

const MovieDesciption = (
    {
        imdbID
    }
) =>{
    const { currentUser } = useSelector((state) => state.users);

    const {bookmark} = useSelector(state => state.bookmarks)
    
    var buttonfunction = false;

    const [movie, setMovie] = useState([]);
    const MOVIE_API = "https://www.omdbapi.com/?apikey=c4ef1217&i="+imdbID ;
    const dispatch = useDispatch();
    const findMovie = async () =>{
        const response = await axios.get(MOVIE_API);
        if (response.data.response === 'False'){
            setMovie([])
        }else{
            setMovie(response.data)
        }
    }
    useEffect(() => {
        findMovie();
    }, [])

    useEffect(() => {
        currentUser && dispatch(findBookMarkThunk(currentUser._id));
    }, [currentUser])
    const onclickhandler = () => {
        dispatch(CreateBookMarkThunk({
             user_id: currentUser._id, imdbID: imdbID, title: movie.Title, Poster: movie.Poster
         }))
    }
     bookmark.map(b => {
         if (b.imdbID == movie.imdbID){
             buttonfunction = true;
         }
     })

    return (
        <div className={"card"}>
            <div className={"card-header"}>
                <div className={"float-start position-relative"}>
                    <h2 className={"text-dark"}>{movie.Title}</h2>
                </div>
                <div className={"float-end position-relative"}>
                    {
                    <button onClick={onclickhandler} disabled={buttonfunction}
                        className={`btn btn-danger`}>bookmark</button>
                    }
                </div>
            </div>
            <div className={"row card-body"}>
                <div className={"col-3 searchdivouter"}>
                    <img width={150} src={movie.Poster}></img>
                </div>
                <div className={"col-7"}>
                    <p>Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Language: {movie.Language}</p>
                    <p>Description: {movie.Plot}</p>
                </div>
                <div className={"col-2 float-end searchdivouter"}>
                    <ReviewScore imdbID={imdbID}/>
                </div>
            </div>

        </div>
    )
}

export default MovieDesciption;