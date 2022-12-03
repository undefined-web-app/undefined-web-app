import {Link} from "react-router-dom";

const LikedUsers = ({users}) => {
    return (
        <div className="list-group mt-3">
            <div className="list-group-item">
                <h5> Liked Users </h5>
            </div>
            <div className="list-group-item">
                <div className="list-group">
                   {users.map(user => <div className="list-group-item"><Link to={`/profile/${user}`}>{user}</Link></div>)}
                </div>
            </div>
        </div>
    )
}

export default LikedUsers;