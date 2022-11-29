
import {useState} from "react";
const SearchInput = () =>{

    let [title, settitle] = useState("")

    return(
        <div className={"row mt-1 mb-3"}>
            <div className="col-10 position-relative">
                <input value={title} placeholder="Enter the movie title"
                       className="form-control me-sm-2" type="text" onChange={(event) => settitle(event.target.value)}/>
            </div>
            <div className="col-1">
                <a href={"/search/"+title}>
                    <button className={"btn btn-secondary my-2 my-sm-0"}>Search</button>
                </a>
            </div>
        </div>
    )
}

export default SearchInput;