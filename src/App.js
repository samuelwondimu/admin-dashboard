import { Fragment } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import store from "./store";
import { Provider } from "react-redux";
import User from "./components/user/User";
import Topnav from "./components/layout/Topnav";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Topnav />
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/profiles" component={Profile} />
              <Route exact path="/users" component={User} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
