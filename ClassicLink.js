import React from "react";
import Link from "./Link";

export default class ClassicLink extends Link {
  constructor() {
    super();
  }

  componentDidMount() {
    super.componentDidMount();
  }

  render() {
    return React.createElement("div", {
      "className" : this.id + " " + (this.props.className ? this.props.className : "")
    }, React.createElement("a", {
      "href" : this.id,
    }, this.props.children));
  }
}
