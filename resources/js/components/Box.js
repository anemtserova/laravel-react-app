import React from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../../css/app.css";

const Box = () => {
    return (
        <div className="d-flex m-2 justify-content-center">
            <div className="d-flex justify-content-center align-items-center box-style  p-3">
                <Link className="link-color" to={"/form"}>
                    <i className="far fa-plus-square fa-6x"></i>
                </Link>
            </div>
        </div>
    );
};

export default Box;

if (document.getElementById("link-box")) {
    ReactDOM.render(<Box />, document.getElementById("link-box"));
}
