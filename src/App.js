import React, {useState} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './component/Header/Menu';
import ViewAircraft from './component/Header/ViewAircraft';
import Home from './component/Header/Home';
import Modalflight from "./component/Header/Modalflight";


function App() {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
   <div>
   <Menu />
   <Switch>
    <Route path="/" exact component= {Home}/>
    <Route path="/viewaircraft" component= {ViewAircraft}/>
   </Switch>
   <div className="text-center flight-details">
                <button className="btn btn-primary" id="flight-details__button" onClick={() => setShow(true)}>
                   Click On Aircrafts
                </button>
              </div>
              <Modalflight show={show} onClose={() => setShow(false)}/>
    </div>
   </BrowserRouter>
  );
}

export default App;
