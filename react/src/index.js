import React from "react";
import ReactDOM from "react-dom";


import "static/css/common.css"
import "static/fonts/iconfont.css"


import RouteView from "routerView";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(<Router><RouteView /></Router>, document.querySelector("body"));
