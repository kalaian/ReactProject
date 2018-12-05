import React from "react";
import { Switch, Route } from "react-router-dom";
import CardList from "./CardList";
import Favs from "./Favs";
import HeroDetails from "./HeroDetails";
import PrivateRoute from "./PrivateRoutes";
import NotLogged from "./NotLoged";


const Routes = () => (
  <Switch>
    <Route path="/" exact component={CardList} />
    <Route path="/not-loged" component={NotLogged} />
    <PrivateRoute path="/favs" component={Favs} />
    <PrivateRoute path="/details/:id" component={HeroDetails} />
  </Switch>
);

export default Routes;
