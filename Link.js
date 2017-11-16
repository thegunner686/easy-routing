import React from "react";

import {
  dispatcher as RouteDispatcher,
  RouteTo
} from "./RouteDispatcher";

export default class Link extends React.Component {
  constructor() {
    super();

    this.id = this.id = "k" + Math.floor(Math.random() * 999999) + "-" + Math.floor(Math.random() * 999999);
  }

  componentDidMount() {
    let self = document.getElementsByClassName(this.id)[0];
        self.addEventListener("click", (e) => {
          RouteTo(this.props.to, this.props.in || "");
        });
  }

  render() {
    return (
      <div className={this.id + " " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
