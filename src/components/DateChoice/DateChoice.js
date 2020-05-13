import React from "react";
import banner from "../../images/Mask Group 1.png";
import "./DateChoice.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateChoice = (props) => {
  return (
    <div className="row m-5">
      <div className="col-md-6 mb-3">
        <Calendar
          onChange={(fixedDate) => props.handleDate(fixedDate)}
          value={props.date}
          minDate={new Date()}
          maxDate={new Date(2021, 11, 31)}
          minDetail={"year"}
        ></Calendar>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img className="w-100" src={banner} alt="" />
      </div>
    </div>
  );
};

export default DateChoice;
