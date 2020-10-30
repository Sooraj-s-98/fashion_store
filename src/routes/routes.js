import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Contacts from '../pages/contacts';
import Cart from '../pages/cart';
import Mens from '../pages/mens';
import Women from '../pages/women';
import Kids from '../pages/kids';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contacts" component={Contacts} />
    <Route path="/cart" component={Cart} />
    <Route path="/mens" component={Mens} />
    <Route path="/women" component={Women} />
    <Route path="/mens" component={Mens} />
    <Route path="/kids" component={Kids} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
