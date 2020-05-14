import React from "react";
import fakeData from "../fakeData";

const AddData = () => {
  const handleAddService = () => {
    fetch("http://localhost:3003/addServices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data Added", data);
      });
  };

  return (
    <div>
      <h1>Add Data</h1>
      <button onClick={handleAddService}>Add Data</button>
    </div>
  );
};

export default AddData;
