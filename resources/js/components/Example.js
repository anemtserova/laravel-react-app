import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import EditForm from "./EditForm";
import LinkBoxes from "./LinkBoxes";
import "../../css/app.css";

const Example = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LinkBoxes} />
                <Route path="/info/:id" component={Form} />
                <Route path="/editinfo/:id" component={EditForm} />
            </Switch>
        </Router>
    );
};

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
