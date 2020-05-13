import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment";
import DoctorsPanel from "./components/DoctorsPanel/DoctorsPanel";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>

        <Route path="/doctorsPanel">
          <DoctorsPanel></DoctorsPanel>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
