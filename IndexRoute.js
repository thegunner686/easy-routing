import React from "react";
import Route from "./Route";

export default class IndexRoute extends Route {
  componentDidMount() {
    super.componentDidMount();
    this.setState({
      showing: true
    });
  }

  render() {
    return super.render();
  }
}
