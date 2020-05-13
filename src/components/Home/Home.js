import React from "react";
import image1 from "../../images/Mask Group 1.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <button type="button" class="btn btn-danger btn-lg">
            Doctors Entrance
          </button>
        </li>
      </ul>

      <div className="homeContainer">
        <div className="row d-flex">
          <div className="col-md-5 textSec">
            <h2>Your New Smile Starts Here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sint voluptatem, commodi minus ut nobis modi, necessitatibus cum
              ex quaerat distinctio doloribus animi aliquam ducimus dolore
              recusandae enim. Voluptatem, non!
            </p>

            <button className="btn btn-info">Get Appointment</button>
          </div>

          <div className="col-md-6">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
