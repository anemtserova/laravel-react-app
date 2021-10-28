import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const EditForm = (props) => {
    const history = useHistory();
    let location = useLocation();
    const [editFormInput, setEditFormInput] = useState({
        title: location.state["title"],
        link: location.state["link"],
        color: location.state["color"],
        boxId: location.state["boxId"],
    });

    console.log("editFORMInput in EditForm", editFormInput);

    const handleInput = (e) => {
        setEditFormInput({ ...editFormInput, [e.target.name]: e.target.value });
    };

    const saveEditInput = async (e) => {
        e.preventDefault();
        const editedInfoPut = await axios.put(
            `http://127.0.0.1:8000/api/editinfo/${editFormInput.boxId}`,

            editFormInput
        );
        const editedInfoGet = await axios.get(
            `http://127.0.0.1:8000/api/editinfo/${editFormInput.boxId}`
        );

        localStorage.setItem(
            `box${editFormInput.boxId}`,
            JSON.stringify(editedInfoGet.data)
        );

        history.push("/");
    };

    return (
        <form className="d-flex m-auto flex-column align-items-center justify-content-center w-50 mt-5 pt-5">
            <h1 className="my-3 headings">Edit Your Link Info</h1>
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
                    value={editFormInput.title}
                    className="form-control"
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
                    value={editFormInput.link}
                    name="link"
                    className="form-control"
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
                    defaultValue={editFormInput.color}
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
                    <option value="Rich Black">Rich Black</option>
                </select>
            </div>

            <div className="d-flex w-50">
                <button
                    onClick={saveEditInput}
                    type="submit"
                    className="btn btn-action mx-2 w-50"
                >
                    UPDATE
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

export default EditForm;

if (document.getElementById("edit-form")) {
    ReactDOM.render(<EditForm />, document.getElementById("edit-form"));
}

EditForm.propTypes = {
    id: PropTypes.number,
};
