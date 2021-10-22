import React from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

const LinkBoxes = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Link Boxes</h1>
            <div className="d-flex my-3 justify-content-center">
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link className="link-color" to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex m-3 justify-content-center">
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex m-3 justify-content-center">
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className=" mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkBoxes;

if (document.getElementById("link-boxes")) {
    ReactDOM.render(<LinkBoxes />, document.getElementById("link-boxes"));
}
