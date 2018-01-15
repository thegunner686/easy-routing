# easy-routing
Easily create a navigable page with simple routing/rendering.

### Install
`npm install easy-routing --save`

### Usage

`''
let {
  Link,
  ClassicLink,
  OpacityLink,
  IndexRoute,
  Route,
  RouteTo,
} = require("easy-routing");
'''

#### Rules for family, path, to, in

1. Routes are defined by a `path` and a `family`. These are both strings.
2. A `path` should be unique to its family.
3. Only one member of a `family` can be rendered at one time. 
4. The `path` prop must be supplied or else there will be an error, but the `family` prop will default to `""` if not supplied, making it a global route.

`to` and `in` act the same as `path` and `family` respectively, except these are the props supplied to the `<Link/>` instead of the `<Route/>`

#### Link, ClassicLink, OpacityLink

'''
<Link to="/About" in="MainPage" className="page-link" onClick={this.linkClicked.bind(this)}>
  About Page
</Link>
'''

Link provides no built-in styles, only the routing functionality. You can pass the 'className' to style the Link (rendered as a div with its children) and the 'onClick' prop to trigger a separate action when the Link is pressed, besides the normal routing.

ClassicLink does all that a Link does except it is rendered as an '<a>' tag to give the style and feel of a regular hyperlink.

OpacityLink does all that a Link does except it triggers a small ease opacity animation.

#### Route, IndexRoute

'''
 <Route path="/About" family="MainPage">
  <AboutPage/>
 </Route>
'''

The Route defines the space where the child components will only be rendered when routed to. The Route does not itself render an HTML element (like the Links do), but instead renders the children or nothing at all (depending on if it is visible).

IndexRoute works the same as the Route except it renders initially.

#### RouteTo

'RouteTo(path, family)'

Use RouteTo to trigger the same action as when pressing a '<Link>'. This function allows you to construct your own program flow for routing instead of relying entirely on the built-in link components.


#### Example
```
  let React = require("react");
  let {
    Link,
    IndexRoute,
    Route
  } = require("easy-routing");
  
 let HomeContent = require("./HomeContent"),
     AboutContent = require("./AboutContent");
  
  class NavigationBar extends React.Component {
    render() {
      return (
        <div>
          <Link to="/" in="body-content">Home Screen</Link>
          <Link to="/about" in="body-content">About Screen</Link>
        </div>
      );
    }
  }
  
  class MainContent extends React.Component {
    render() {
      return (
        <div>
          <NavigationBar/>
          <IndexRoute path="/" family="body-content">
            <HomeContent/>
          </IndexRoute>
          <Route path="/about" family="body-content">
             <AboutContent/>
          </Route>
        </div>
      );
    }
  }
```
