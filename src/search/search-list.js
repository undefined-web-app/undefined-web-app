import SearchItem from "./search-item";
import axios from "axios";
import {useEffect, useState} from "react";
import SearchInput from "./search-input";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const SearchList = () => {
    var title = useParams().title;
    const [movies, setMovies] = useState([]);
    const Movie_API = "https://www.omdbapi.com/?apikey=c4ef1217&s="+title ;
    const dispatch = useDispatch();
    const findMovie = async () =>{
        if (title === undefined || title === '') {
            return;
        }
        const response = await axios.get(Movie_API);
        if (response.data.Response === 'False'){
            setMovies([])
        }else{
            setMovies(response.data.Search)
        }
    }
    useEffect(() => {
        findMovie();
    }, [dispatch, title])

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
