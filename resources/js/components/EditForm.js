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

    const deleteBoxData = async (id) => {
        // e.preventDefault();
        const delResp = axios
            .delete(`http://127.0.0.1:8000/api/editinfo/${id}`)
            .then(() => true);

        const getBox = await axios.get(
            `http://127.0.0.1:8000/api/editinfo/${id}`
        );

        localStorage.setItem(`box${id}`, JSON.stringify(getBox.data));
        history.push("/");
    };

    useEffect(async () => {
        const resp = await axios.get(
            `http://127.0.0.1:8000/api/editinfo/${editFormInput.boxId}`
        );
    }, []);

    return (
        <form className="d-flex m-auto flex-column align-items-center justify-content-center w-50 mt-5 pt-5">
            <h1 className="my-3 headings uppercase">Edit Your Link Info</h1>
            <div className="input-group mb-3">
                <label
                    className="input-group-text upercase label-style"
                    id="basic-addon1"
                >
                    Title
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
                    className="input-group-text uppercase label-style"
                    id="basic-addon2"
                >
                    link
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
                    className="input-group-text uppercase label-style"
                    id="basic-addon3"
                >
                    color
                </label>
                <select
                    name="color"
                    className="form-select form-control highlight"
                    defaultValue={editFormInput.color}
                    onChange={handleInput}
                >
                    <option value="Pick a color">Pick a color</option>
                    <option value="Crimson">Crimson</option>
                    <option value="Fuchsia">Fuchsia</option>
                    <option value="YellowGreen">YellowGreen</option>
                    <option value="Teal">Teal</option>
                    <option value="Tomato">Tomato</option>
                    <option value="DodgerBlue">DodgerBlue</option>
                    <option value="Gold">Gold</option>
                    <option value="OliveDrab">OliveDrab</option>
                    <option value="DarkSlateGray">DarkSlateGray</option>
                </select>
            </div>

            <div className="d-flex w-50 justify-content-center">
                <button
                    onClick={saveEditInput}
                    type="submit"
                    className="btn btn-action w-50 uppercase"
                >
                    update
                </button>
                <Link className="w-50 mx-2" to={"/"}>
                    <button
                        onClick={() => deleteBoxData(editFormInput.boxId)}
                        type="submit"
                        className="btn btn-action w-100 uppercase"
                    >
                        delete
                    </button>
                </Link>
                <Link className="w-50" to={"/"}>
                    <button type="btn" className="btn btn-back w-100 uppercase">
                        back
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
