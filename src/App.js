import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import AircraftListView from "./Pages/AircraftListView/AircraftListView";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact> 
            <Home></Home>
          </Route>
          <Route path="/list-view">
            <AircraftListView></AircraftListView>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
