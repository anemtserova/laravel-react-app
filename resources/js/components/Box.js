import React, { useState, useEffect } from "react";
//import ReactDOM from 'react-dom';
import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "../../css/app.css";
import PropTypes from "prop-types";
import axios from "axios";
import { get } from "jquery";

const Box = (props) => {
    const [infoBox, setInfoBox] = useState({});

    return (
        <div>
            <div className="d-flex m-2 justify-content-center">
                {!JSON.parse(localStorage.getItem(`box${props.id}`)) ? (
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link
                            //onClick={hello}
                            to={{
                                pathname: `/info/${props.id}`,
                                state: { boxId: props.id },
                            }}
                            className="btn link-color"
                        >
                            <i className="far fa-plus-square fa-6x"></i>
                        </Link>
                    </div>
                ) : (
                    <div
                        className={`d-flex flex-column justify-content-center align-items-center box-style  p-3 `}
                    >
                        <div className="d-flex justify-content-center align-items-center   m-0">
                            <ExternalLink
                                href={`${
                                    JSON.parse(
                                        localStorage.getItem(`box${props.id}`)
                                    )["link"]
                                }`}
                                className="btn link-color p-0"
                            >
                                <i className="far fa-plus-square fa-6x p-0"></i>
                            </ExternalLink>
                        </div>
                        <div className="d-flex m-0 justify-content-center align-items-center">
                            <Link
                                // onClick={getBoxData}
                                to={{
                                    pathname: `/editinfo/${props.id}`,
                                    state: {
                                        boxId: props.id,
                                        title: JSON.parse(
                                            localStorage.getItem(
                                                `box${props.id}`
                                            )
                                        )["title"],
                                        link: JSON.parse(
                                            localStorage.getItem(
                                                `box${props.id}`
                                            )
                                        )["link"],
                                        color: JSON.parse(
                                            localStorage.getItem(
                                                `box${props.id}`
                                            )
                                        )["color"],
                                    },
                                }}
                                className="d-flex btn btn-style-sm justify-content-center align-items-center"
                                type="button"
                            >
                                MODIFY
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Box;

if (document.getElementById("link-box")) {
    ReactDOM.render(<Box />, document.getElementById("link-box"));
}

Box.propTypes = {
    id: PropTypes.number.isRequired,
};
