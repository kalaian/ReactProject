import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CardList from './CardList'
import Favs from './Favs';
import HeroDetails from './HeroDetails';



const Routes = () => (
  <Switch>
    <Route path='/' exact component={CardList} />
    <Route path='/favs' component={Favs} />
    <Route path='/details/:id' component={HeroDetails}/>
  </Switch>
)

export default Routes