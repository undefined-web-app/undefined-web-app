import React from "react";
const SearchItem = (
    {
        movie
    }
    ) => {
    let image = movie.Poster;
    if (movie.Poster === "N/A"){
        image = "../images/noinfo.png";
    }
    return(
        <li className={"list-group-item"}>
            <div className={"row mt-2"}>
                <div className={"col-2"}>
                    <img src={image} className="img-fluid" alt="No Infomation"/>
                </div>
                <div className={"col-7"}>
                    <div>
                        <h2>{movie.Title}</h2>
                    </div>
                    <div>
                        <h3>Year:{movie.Year} ID:{movie.imdbID} </h3>
                    </div>
                </div>
                <div className={"col-2"}>
                    <h2>26</h2>
                </div>
            </div>
        </li>
    )
}

export default SearchItem;