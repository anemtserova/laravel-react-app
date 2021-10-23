import React from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Box from "./Box";

const LinkBoxes = () => {
    const displayBox = () => {
        let boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Box key={i} />);
        }
        return boxes;
    };
    return (
        <div className="container w-50 d-flex flex-column justify-content-center align-items-center my-3">
            <h1 className="text-center">Link Boxes</h1>
            <div className="d-flex flex-wrap w-75 justify-content-center">
                {displayBox()}
            </div>
            {/* <div className="d-flex my-3 justify-content-center">
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link className="link-color" to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex m-3 justify-content-center">
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex m-3 justify-content-center">
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-flex mx-2 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link to={"/form"}>
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default LinkBoxes;

if (document.getElementById("link-boxes")) {
    ReactDOM.render(<LinkBoxes />, document.getElementById("link-boxes"));
}
