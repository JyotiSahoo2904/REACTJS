import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Weather from "./Weather";
import ItemService from './shared/weather-service';
import Trade from "./Trade";
import Test from "./Test";
import ModalTest from "./ModalTest";
import TestCustomBar from "./Components/override/TestCustomBar"

 
class Main extends Component {   

  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
          <li><NavLink exact  to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/weather">Weather</NavLink></li>
            <li><NavLink to="/trade">Trade</NavLink></li>
            <li><NavLink to="/test">Trade</NavLink></li>
            <li><NavLink to="/modeltest">ModalTest</NavLink></li>
            <li><NavLink to="/override">OverRideTest</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/weather" component={Weather}/>
            <Route path="/trade" component={Trade}/>
            <Route path="/test" component={Test}/>
            <Route path="/modeltest" component={ModalTest}/>
            <Route path="/override" component={ModalTest}/>
             
          </div>
        </div>

        </HashRouter>
    );
  }
}
 
export default Main;