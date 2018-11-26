import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CardList from './CardList'
import Favs from './Favs';
import HeroDetails from './HeroDetails';
import Callback from './Callback';

const Routes = () => (
  <Switch>
    <Route path='/' component={CardList} />
    <Route path='/favs' component={Favs} />
    <Route path='/details/:id' component={HeroDetails}/>
    <Route path='/callback' component={Callback}/>
  </Switch>
)

export default Routes