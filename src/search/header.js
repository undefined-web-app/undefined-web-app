import React from "react";



const Header = () => {
    return(
        <div className={"row mt-2"}>
            <div className={"col-11"}>
                title
            </div>
            <div className={"col-1 float-end"}>
                <button>
                    login/register
                </button>
            </div>
        </div>
    )

}

export default Header;