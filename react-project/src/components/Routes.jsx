import React from "react";
import { Switch, Route } from "react-router-dom";
import CardList from "./CardList";
import Favs from "./Favs";
import HeroDetails from "./HeroDetails";
import PrivateRoutes from "./PrivateRoutes";
import NotLogged from "./NotLoged"

const Routes = () => (
  <Switch>
    <Route path="/" component={CardList} />
    <Route path="/not-loged" component={NotLogged} />
    <PrivateRoutes path="/favs" component={Favs} />
    <PrivateRoutes path="/details/:id" component={HeroDetails} />
  </Switch>
);

export default Routes;
