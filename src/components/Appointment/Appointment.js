import React from "react";
import { Link } from "react-router-dom";
import "./Appointment.css";
import DateChoice from "../DateChoice/DateChoice";
import { useState } from "react";
import ServiceOptions from "../ServiceOptions/ServiceOptions";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  const handleDate = (fixedDate) => {
    setDate(fixedDate);
  };

  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <Link to="/home">
            <button type="button" class="btn btn-danger btn-lg">
              Home
            </button>
          </Link>
        </li>
      </ul>

      <div className="container">
        <h1 className="text-info">Appointment</h1>

        <DateChoice date={date} handleDate={handleDate}></DateChoice>

        <ServiceOptions date={date}></ServiceOptions>
      </div>
    </div>
  );
};

export default Appointment;
