import React from "react";
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from './user/pages/Users'

function App() {
  return (
  <BrowserRouter>
  <MainNavigation />
  <main>
    <Switch>
      <Route path='/' exact>
        <Users />
      </Route>
      <Route path='/:userId/places' exact>
        <UserPlaces />
      </Route>
      <Route path='/places/new' exact>
        <NewPlace />
      </Route>
      <Redirect to='/' />
    </Switch>
    </main>
  </BrowserRouter>
  );
}

export default App;
