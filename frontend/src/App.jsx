import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from './shared/components/Navigation/MainNavigation';


const App = () => {
  return (
    <Router>
    <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
