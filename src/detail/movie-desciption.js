import axios from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import React from "react";

const MovieDesciption = (
    {
        imdbID
    }
) =>{

    const [movie, setMovie] = useState([]);
    const Movie_API = "https://www.omdbapi.com/?apikey=c4ef1217&i="+imdbID ;

    const findmovie = async () =>{
        const response = await axios.get(Movie_API);
        if (response.data.Response === 'False'){
            setMovie([])
        }else{
            setMovie(response.data)
        }
    }
    useEffect(() => {
        findmovie();
    }, [])


    return (
        <div className={"card"}>
            <div className={"card-header"}>
                <div className={"float-start position-relative"}>
                    <h2 className={"text-dark"}>{movie.Title}</h2>
                </div>
                <div className={"float-end position-relative"}>
                    <button className={"btn btn-danger"}>bookmark</button>
                </div>
            </div>
            <div className={"row card-body"}>
                <div className={"col-3"}>
                    <img width={150} src={movie.Poster}></img>
                </div>
                <div className={"col-7"}>
                    <p>Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Language: {movie.Language}</p>
                    <p>Description: {movie.Plot}</p>
                </div>
                <div className={"col-2 float-end"}>
                    <h2 className={"text-warning"}>52</h2>
                </div>
            </div>

        </div>
    )
}

export default MovieDesciption;