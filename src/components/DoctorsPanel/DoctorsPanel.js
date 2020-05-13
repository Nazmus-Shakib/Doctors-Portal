import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../DashBoard/DashBoard";

const DoctorsPanel = () => {
  return (
    <div>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to="/home">
            <button type="button" class="btn btn-danger btn-lg">
              Home
            </button>
          </Link>
        </li>
      </ul>

      <Router>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/doctorPanel/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default DoctorsPanel;
