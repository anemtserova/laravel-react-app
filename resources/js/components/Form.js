import React, { useState } from "react";
//import ReactDOM from 'react-dom';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Form = (props) => {
    const history = useHistory();

    const [formInput, setFormInput] = useState({
        title: "",
        link: "",
        color: "",
        boxId: props.boxId,
    });

    const handleInput = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
        // setFormInput({ boxId: e.target.value });
    };

    const saveInput = async (e) => {
        console.log("event", e);
        console.log("formInput", formInput);

        e.preventDefault();
        const res = await axios.post(
            `http://127.0.0.1:8000/api/form/${props.boxId}`,
            formInput
        );

        if (res.data.status === 200) {
            console.log(res.data.message);
            history.push("/");
        }
    };

    return (
        <form
            className="d-flex m-auto flex-column align-items-center justify-content-center w-50 mt-5 pt-5"
            // action="resources/insert.php"
            // method="POST"
        >
            <h1 className="my-3">Set up your custom link</h1>
            <div className="input-group mb-3">
                <label className="input-group-text " id="basic-addon1">
                    Title
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
                <label className="input-group-text " id="basic-addon2">
                    Link
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
            {/* <div className="input-group mb-3">
                <label className="input-group-text " id="basic-addon2">
                    Box ID
                </label>
                <input
                    type="text"
                    //onChange={handleInput}
                    value={props.id}
                    name="boxId"
                    className="form-control"
                    placeholder="Enter Box Id (from 1 to 9)"
                    aria-label="ID"
                    aria-describedby="basic-addon1"
                />
            </div> */}
            <div className="input-group mb-3">
                <label className="input-group-text " id="basic-addon3">
                    Color
                </label>
                <select
                    name="color"
                    className="form-select form-control highlight"
                    //value={this.state.type}
                    defaultValue={"Pick a color"}
                    onChange={handleInput}
                >
                    <option value="Pick a color">Pick a color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                </select>
                {/* <input
					type="text"
					onChange={handleInput}
					//value={formInput.link}
					name="color"
					className="form-control"
					placeholder="Enter color"
					aria-label="Color"
					aria-describedby="basic-addon1"
				/> */}
            </div>

            <div className="d-flex w-50">
                <button
                    onClick={saveInput}
                    type="submit"
                    className="btn btn-success mx-2 w-50"
                >
                    Save
                </button>
                <Link className="w-50" to={"/"}>
                    <button type="btn" className="btn btn-success mx-2 w-100">
                        Back to boxes
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
