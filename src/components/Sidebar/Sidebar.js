import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <Link to="/doctorPanel/dashboard" className="menu-link">
          <BorderAllIcon></BorderAllIcon> Dashboard
        </Link>
        <Link to="/doctorPanel/appointList" className="menu-link">
          <FontAwesomeIcon icon={faCalendarCheck} /> Appointment
        </Link>
        <Link to="/doctorPanel/patients" className="menu-link">
          <SupervisorAccountIcon /> Patients
        </Link>
        <Link to="/doctorPanel/Prescription" className="menu-link">
          <DescriptionOutlinedIcon /> Prescriptions
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
