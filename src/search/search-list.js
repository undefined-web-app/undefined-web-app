import SearchItem from "./search-item";
import axios from "axios";
import {useEffect, useState} from "react";
import SearchInput from "./search-input";
import {useDispatch} from "react-redux";


const SearchList = () => {

    var title = window.location.href.split("/:")[1];
    const [movies, setMovies] = useState([]);
    const Movie_API = "https://www.omdbapi.com/?apikey=c4ef1217&s="+title ;
    const dispatch = useDispatch();
    var find = true
    const findmovie = async () =>{
        const response = await axios.get(Movie_API);
        if (response.data.Response === 'False'){
            this.find= false;
            setMovies([])
        }else{
            setMovies(response.data.Search)
        }
    }
    useEffect(() => {
        findmovie();
    }, [dispatch])


    return(
        <>
            <SearchInput/>
            <h1>{movies.toString()}</h1>
            <ul className="list-group mt-5 ">
                {
                    find &&
                    movies.slice(0,3).map((movie,index) =>
                        <SearchItem key={index} movie = {movie}/>
                    )
                }
                {
                    find &&
                    <h1>didn't find</h1>
                }
            </ul>
        </>
    )
}
export default SearchList;
