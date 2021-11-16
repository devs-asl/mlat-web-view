import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './component/Header/Menu';
import ViewAircraft from './component/Header/ViewAircraft';
import Home from './component/Header/Home';


function App() {
  return (
    <BrowserRouter>
   <div>
   <Menu />
   <Switch>
    <Route path="/" exact component= {Home}/>
    <Route path="/viewaircraft" component= {ViewAircraft}/>
   </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
