import React from "react";
import Link from "./Link";

import {
  dispatcher as RouteDispatcher,
  RouteTo
} from "./RouteDispatcher";

export default class OpacityLink extends Link {
  constructor() {
    super();
  }

  componentDidMount() {
    let self = document.getElementsByClassName(this.id)[0];
        self.style.webkitTransition = "0.2s all ease";
        self.addEventListener("click", (e) => {
          e.target.style.opacity = "0.1";
          setTimeout(() => {
            e.target.style.opacity = "1";
          }, 200);
          RouteTo(this.props.to, this.props.in || "");
        });
  }

  render() {
    return React.createElement("div", {
      "className" : this.id + " " + (this.props.className ? this.props.className : "")
    }, this.props.children);
  }
}
