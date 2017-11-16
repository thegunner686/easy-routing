import dispatcher from "./Dispatcher";

export function RouteTo(path, family) {
  dispatcher.dispatch({
    type: "RouteTo",
    path,
    family
  });
}
