import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Form = (props) => {
    const history = useHistory();
    let location = useLocation();

    const [formInput, setFormInput] = useState({
        title: "",
        link: "",
        color: "",
        boxId: location.state["boxId"],
    });

    const handleInput = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    const saveInput = async (e) => {
        e.preventDefault();
        const res = await axios.post(
            `http://127.0.0.1:8000/api/info/${formInput.boxId}`,
            formInput
        );

        if (res.data.status === 200) {
            console.log(res.data.message);
            history.push("/");
        }
    };

    return (
        <form className="d-flex m-auto flex-column align-items-center justify-content-center w-50 mt-5 pt-5">
            <h1 className="my-3 headings">Set up Your Custom Link</h1>
            <div className="input-group mb-3">
                <label
                    className="input-group-text label-style"
                    id="basic-addon1"
                >
                    TITLE
                </label>
                <input
                    onChange={handleInput}
                    type="text"
                    name="title"
                    //value={formInput.title}
                    className="form-control"
                    placeholder="Website Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="input-group mb-3">
                <label
                    className="input-group-text label-style"
                    id="basic-addon2"
                >
                    LINK
                </label>
                <input
                    type="text"
                    onChange={handleInput}
                    //value={formInput.link}
                    name="link"
                    className="form-control"
                    placeholder="Website Link"
                    aria-label="Link"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className="input-group mb-3">
                <label
                    className="input-group-text label-style"
                    id="basic-addon3"
                >
                    COLOR
                </label>
                <select
                    name="color"
                    className="form-select form-control highlight"
                    //value={this.state.type}
                    defaultValue={"Pick a color"}
                    onChange={handleInput}
                >
                    <option value="Pick a color">Pick a color</option>
                    <option value="Red">Rufus</option>
                    <option value="Mahogany">Mahogany</option>
                    <option value="Alloy Orange">Alloy Orange</option>
                    <option value="Gamboge">Gamboge</option>
                    <option value="Yellow">Yellow Green Crayola</option>
                    <option value="Middle Blue Green">Middle Blue Green</option>
                    <option value="Viridian Green">Viridian Green</option>
                    <option value="Blue Sapphire">Blue Sapphire</option>
                    <option value="Rich Black GORGA">Rich Black GORGA</option>
                </select>
            </div>

            <div className="d-flex w-50">
                <button
                    onClick={saveInput}
                    type="submit"
                    className="btn btn-action mx-2 w-50"
                >
                    SAVE
                </button>
                <Link className="w-50" to={"/"}>
                    <button type="btn" className="btn btn-back mx-2 w-100">
                        BACK TO BOXES
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default Form;

if (document.getElementById("form")) {
    ReactDOM.render(<Form />, document.getElementById("form"));
}

Form.propTypes = {
    id: PropTypes.number,
};
