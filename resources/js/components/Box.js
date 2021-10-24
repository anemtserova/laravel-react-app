import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import { Link, useHistory } from "react-router-dom";
import "../../css/app.css";
import PropTypes from "prop-types";
import Form from "./Form";

const Box = (props) => {
    let history = useHistory();

    const goToForm = () => {
        //setBoxId(props.id);
        history.push(`/form/${props.id}`);
        return <Form boxId={props.id} />;
    };
    return (
        <div className="d-flex m-2 justify-content-center">
            <div className="d-flex justify-content-center align-items-center box-style  p-3">
                <button onClick={goToForm} className="btn link-color">
                    <i className="far fa-plus-square fa-6x"></i>
                </button>
            </div>
        </div>
    );
};

export default Box;

if (document.getElementById("link-box")) {
    ReactDOM.render(<Box />, document.getElementById("link-box"));
}

Box.propTypes = {
    id: PropTypes.number,
};
