import React from "react";

import RouteStore from "./RouteStore";

export default class Route extends React.Component {
  constructor() {
    super();

    this.state = {
      showing: false,
    };
    this.updateRoute = this.updateRoute.bind(this);
  }

  componentDidMount() {
    if(this.props.path == null) {
      throw new Error("Route Path must not be null. Supply the 'path' prop to your <Route/>");
    }
    RouteStore.on("RouteTo", this.updateRoute);
  }

  componentWillUnmount() {
    RouteStore.removeListener("RouteTo", this.updateRoute);
  }

  updateRoute() {
    if(this.props.path == null) {
      console.error("Path prop is null for <Route/>");
      return;
    }
    let path = RouteStore.getCurrentPath(),
        family = RouteStore.getCurrentFamily(),
        prop_fam = this.props.family || "";
    if(prop_fam == family) {
      this.setState({
        showing: this.props.path == path,
      });
    }
  }

  render() {
    let rex = (this.state.showing) ? this.props.children : "";
    return React.createElement("div", null, rex);
  }
}
