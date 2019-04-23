import React, { Component } from 'react';
import ReviewCart from './ReviewCart';
import Billing from './Billing';
import OrderComplete from './OrderComplete';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Route path="/review-cart" component={ReviewCart} exact/>
        <Route path="/billing" component={Billing}/>
        <Route path="/order-complete" component={OrderComplete}/>
        </BrowserRouter>
    );
  }
}
