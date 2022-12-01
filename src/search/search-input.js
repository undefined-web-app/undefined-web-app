
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
const SearchInput = () =>{
    let [title, setTitle] = useState("")
    const navigate = useNavigate();
    const onSearchHandler = () => {
        if (title === '' || title === undefined) {
            return;
        }
        navigate('/search/' + title)
    };
    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            onSearchHandler();
        }
    };
    return(
        <div className={"row mt-1 mb-3"}>
            <div className="col-10 position-relative">
                <input value={title} placeholder="Enter the movie title"
                       className="form-control me-sm-2" type="text" onChange={(event) => setTitle(event.target.value)} onKeyDown={onKeyDownHandler}/>
            </div>
            <div className="col-1">
                <button className={"btn btn-secondary my-2 my-sm-0"} onClick={onSearchHandler}>Search</button>
            </div>
        </div>
    )
}

export default SearchInput;