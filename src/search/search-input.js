
import {useState} from "react";
const SearchInput = () =>{

    let [title, settitle] = useState("")

    return(
        <div className={"row mt-1"}>
            <div className="col-10 position-relative">
                <input value={title} placeholder="Enter the movie title"
                       className="form-control rounded-pill ps-5" onChange={(event) => settitle(event.target.value)}/>
                <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
            </div>
            <div className="col-1">
                <a href={"/search/"+title}>
                    <button>Search</button>
                </a>
            </div>
        </div>
    )
}

export default SearchInput;