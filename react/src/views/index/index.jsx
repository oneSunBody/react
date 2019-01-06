import React, { Component } from "react";
import RouteView from "router"
import { NavLink } from "react-router-dom"
export default class Index extends Component {
  render() {
    let { routes } = this.props
    return (
      <div className="wrap">
      <h1>我是首页</h1>
      </div>
    )
  }
}

