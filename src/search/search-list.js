import SearchItem from "./search-item";
import axios from "axios";
import {useEffect, useState} from "react";
import SearchInput from "./search-input";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


const SearchList = () => {

    var title = useParams().title;
    //var title = window.location.href.split("/:")[1];
    const [movies, setMovies] = useState([]);
    const Movie_API = "https://www.omdbapi.com/?apikey=c4ef1217&s="+title ;
    const dispatch = useDispatch();
    const findmovie = async () =>{
        if (title === undefined) {
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
        findmovie();
    }, [dispatch])


    return(
        <>
            <SearchInput/>
            {
                movies.length === 0 ? <h3 className="mt-3">No result found</h3> :
                <ul className="list-group mt-5 ">
                    {
                        movies.slice(0, 3).map((movie, index) =>
                            <SearchItem key={index} movie={movie}/>
                        )
                    }
                </ul>
            }
        </>
    )
}
export default SearchList;
