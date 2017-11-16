import { EventEmitter } from "events";
import dispatcher from "./Dispatcher";

class RouteStore extends EventEmitter {
  constructor() {
    super();

    this.currentPath = "";
    this.currentFamily = "";
  }

  getCurrentPath() {
    return this.currentPath;
  }

  getCurrentFamily() {
    return this.currentFamily;
  }

  handleActions(action) {
    switch(action.type) {
      case "RouteTo":
        this.currentPath = action.path;
        this.currentFamily = action.family;
        setTimeout(() => {
          this.emit("RouteTo");
        }, 0);
      break;
    }
  }
}

let route_store = new RouteStore;
dispatcher.register(route_store.handleActions.bind(route_store));
export default route_store;
