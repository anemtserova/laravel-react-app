import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import LinkBoxes from "./LinkBoxes";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LinkBoxes} />
                <Route path="/form" component={Form} />
            </Switch>
        </Router>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
