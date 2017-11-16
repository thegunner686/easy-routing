# easy-routing
Easily create a navigable page with simple routing/rendering.

### Install
`npm install easy-routing --save`

### Usage

`let Routing = require("easy-routing");`

Use `<Routing.Route/>` to define a space where a component will be rendered when the path is called to by a `<Link/>`

Use `<Routing.IndexRoute/>` to define a Route that will render its component initially. (A regular Route will not render its component until called to by a `<Link/>`)

Use `<Routing.Link/>` to define a link that will render the component inside the `<Routing.Route/>` with the corresponding path and family.

#### Rules for family, path, to, in

1. Routes are defined by a `path` and a `family`. These are both strings.
2. A `path` should be unique to its family.
3. Only one member of a `family` can be rendered at one time. 
4. The `path` prop must be supplied or else there will be an error, but the `family` prop will default to `""` if not supplied, making it a global route.

`to` and `in` act the same as `path` and `family` respectively, except these are the props supplied to the `<Link/>` instead of the `<Route/>`


#### Example
```
  let React = require("react");
  let Routing = require("easy-routing");
  
  class NavigationBar extends React.Component {
    render() {
      return (
        <div>
          <Routing.Link to="/" in="body-content">Home Screen</Routing.Link>
          <Routing.Link to="/about" in="body-content">About Screen</Routing.Link>
        </div>
      );
    }
  }
  
  class MainContent extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <Routing.IndexRoute path="/" family="body-content">
            <HomeContent/>
          </Routing.IndexRoute>
          <Routing.Route path="/about" family="body-content">
             <AboutContent/>
          </Routing.Route>
        </div>
      );
    }
  }
```
