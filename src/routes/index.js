import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Login /> } />
      <Route path="/carteira" render={ () => <Wallet /> } />
    </Switch>
  );
}
