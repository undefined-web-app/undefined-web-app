


const ReviewsPost = (
    {
        imdbID
    }
) =>{
    return(
        <div>
            <div className={"row"}>
                <div className={"col-1"}>
                    <label className={"float-start"}>Score:</label>
                </div>
                <div className={"col-9"}>
                    <input className={"form-range "} type="range" id="customRange3"/>
                </div>
                <div className={"col-1 ms-2"}>
                    <h2>23</h2>
                </div>
            </div>
            <div className={"mt-3 text-center row"}>
                <div className={"col-1"}>
                <label className={"float-start "}>Review:</label>
                </div>
                <div className={"col-10"}>
                <textarea className="form-control " id="exampleTextarea" rows="3"></textarea>
                </div>
            </div>
            <div className={"mt-3 text-center"}>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="submit" className="btn btn-primary ">Cancel</button>
            </div>
        </div>
    )
}
export default ReviewsPost;