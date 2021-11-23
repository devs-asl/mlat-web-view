import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./component/Header/Menu";
import ViewAircraft from "./component/Header/ViewAircraft";
import Home from "./component/Header/Home";
import Footer from "./component/Header/Footer";
import Registration from "./component/Header/Registration";
import SignIn from "./component/Header/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewaircraft" component={ViewAircraft} />
          <Route path="/registration" component={Registration} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
