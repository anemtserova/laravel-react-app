import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "../../css/app.css";
import PropTypes from "prop-types";

const Box = (props) => {
    const [infoBox, setInfoBox] = useState({});

    return (
        <div>
            <div className="d-flex m-2 justify-content-center">
                {!JSON.parse(localStorage.getItem(`box${props.id}`)) &&
                JSON.parse(localStorage.getItem(`box${props.id}`)) == "" ? (
                    <div className="d-flex justify-content-center align-items-center box-style  p-3">
                        <Link
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
                        className={`d-flex flex-column justify-content-center align-items-center   p-3 box-style`}
                        style={{
                            border: `8px solid ${
                                JSON.parse(
                                    localStorage.getItem(`box${props.id}`)
                                ).color
                            }`,
                        }}
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
                            <div className="d-flex m-0 mr-1 justify-content-center align-items-center">
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
                                    className="d-flex btn btn-style-sm justify-content-center align-items-center uppercase"
                                    type="button"
                                    style={{
                                        color: `${
                                            JSON.parse(
                                                localStorage.getItem(
                                                    `box${props.id}`
                                                )
                                            )["color"]
                                        }`,
                                    }}
                                >
                                    modify
                                </Link>
                            </div>
                            {/* <div className="d-flex m-0 justify-content-center align-items-center">
                                <button
                                    onClick={() => deleteBoxData(props.id)}
                                    className="d-flex btn btn-style-sm justify-content-center align-items-center uppercase"
                                    type="button"
                                >
                                    delete
                                </button>
                            </div> */}
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
