import React, { Component, lazy, Suspense } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./utility/NavBar/NavBar";
import Home from "./pages/Home/Home";
import SingelFullVenue from "./pages/SingelFullVenue/SingelFullVenue";
import Modal from "./utility/Modal/Modal";
import CityVenues from "./pages/CityVenues/CityVenues";
import Account from "./pages/Account/Account";
import Test from "./Test";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";
import Search from "./pages/Search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingelFullVenue} />
        <Route exact path="/City/:cityName" component={CityVenues} />
        <Route path="/" component={Modal} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/payment-success/:stripeToken" component={PaymentSuccess} />
        <Route path="/account" component={Account} />
        <Route path="/search/:searchTerm" component={Search} />
      </Router>
    );
  }
}
export default App;
