import React, { useState, useEffect } from "react";
//import ReactDOM from 'react-dom';
import Box from "./Box";
import "../../css/app.css";
import PropTypes from "prop-types";
import axios from "axios";

const LinkBoxes = (props) => {
    const linkBoxes = [];

    useEffect(async () => {
        try {
            for (let i = 1; i < 10; i++) {
                const resp = await axios.get(
                    `http://127.0.0.1:8000/api/info/${i}`
                );

                window.localStorage.setItem(
                    `box${i}`,
                    JSON.stringify(resp.data)
                );
            }
            console.log("this runs after load");
            return true;
        } catch (err) {
            console.error("There has been an error while loging in.", err);
        }
    }, []);

    for (let i = 0; i < 9; i++) {
        linkBoxes.push(<Box key={i} id={i + 1} />);
    }

    return (
        <div className="container w-50 d-flex flex-column justify-content-center align-items-center my-3">
            <h1 className="text-center headings uppercase">Link Boxes</h1>
            <div className="d-flex flex-wrap w-75 justify-content-center">
                {linkBoxes}
            </div>
        </div>
    );
};

export default LinkBoxes;

if (document.getElementById("link-boxes")) {
    ReactDOM.render(<LinkBoxes />, document.getElementById("link-boxes"));
}

LinkBoxes.propTypes = {
    id: PropTypes.number,
};
