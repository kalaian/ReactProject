import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CardList from './CardList'
import Favs from './Favs';



const Routes = () => (
  <Switch>
    <Route path='/' exact component={CardList} />
    <Route path='/favs' component={Favs} />
  </Switch>
)

export default Routes