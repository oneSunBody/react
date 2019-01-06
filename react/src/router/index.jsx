import React, { Component } from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import baseRoute from "./routes";
export default class index extends Component {
  render() {
    let { routes } = this.props;
    let Routes = routes ? routes : baseRoute;
    let baseComp = (
      <Route
        path="/"
        render={() => {
          return <Redirect to="/index/home" />;
        }}
        exact
        key={0}
      />
    );
    return (
        <Switch>
          {Routes.map((obj, index) => {
            let Comp = obj.component;
            if (Comp) {
              return (
                <Route
                  path={obj.path}
                  render={routeApi => {
                    return obj.children ? (
                      <Comp {...routeApi} routes={obj.children} />
                    ) : (
                      <Comp {...routeApi} />
                    );
                  }}
                  key={index}
                />
              );
            }
            return true;
          }).concat([baseComp])}
        </Switch>
    );
  }
}
