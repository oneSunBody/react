import React from "react";
import ReactDOM from "react-dom";

import "static/css/com.css"

import RouteView from "router";
import { BrowserRouter as Router } from "react-router-dom";

import {Provider} from "react-redux"
import store from "store"
ReactDOM.render(
    <Provider store={store}>
        <Router><RouteView/></Router>
    </Provider>,
    document.querySelector("#root")
 );
