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
                <div className={"col-1"}>
                    <img src={image} height={150} className="-image" alt="No Infomation"/>
                </div>
                <div className={"col-9 ms-3 mt-2"}>
                    <div>
                        <a href={"/detail/"+movie.imdbID} className={"text-decoration-none"}>
                            <h2 className={"text-dark"}>{movie.Title}</h2>
                        </a>
                    </div>
                    <div>
                        <h3 className={"text-dark"}>Year:{movie.Year} ID:{movie.imdbID}</h3>
                    </div>
                </div>
                <div className={"col-1"}>
                    <h2 className={"text-warning float-end"}>26</h2>
                </div>
            </div>
        </li>
    )
}

export default SearchItem;