import SearchItem from "./search-item";
import axios from "axios";
import {useEffect, useState} from "react";
import SearchInput from "./search-input";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {findReviewsByIMDBID, findReviewsByUserName} from "../services/reviews-service";

const SearchList = () => {
    var title = useParams().title;
    //var title = window.location.href.split("/:")[1];
    const [movies, setMovies] = useState([]);
    const Movie_API = "https://www.omdbapi.com/?apikey=c4ef1217&s="+title ;
    const dispatch = useDispatch();
    const findmovie = async () =>{
        const response = await findReviewsByUserName('liuhantong');
        if (response.data.Response === 'False'){
            setMovies([])
        }else{
            setMovies(response.data.Search)
        }
    }

    console.log(Date.now());

    useEffect(() => {
        findmovie();
    }, [dispatch])

    return(
        <>
            <SearchInput/>
            <ul className="list-group mt-5 ">
                {
                    movies.slice(0,3).map((movie,index) =>
                        <SearchItem key={index} movie = {movie}/>
                    )
                }
            </ul>
        </>
    )
}
export default SearchList;
