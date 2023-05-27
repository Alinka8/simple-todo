import React from "react";
import { cars } from "../carsList/carsData";
import "./studentsList-demo.style.css";

function CarsList() {
  const ShowStudents = () => {
    return cars.map((el, index) => {
      return (
        <div key={index}>
          <img src={el.picture} />
          <h1>{el.name}</h1>
          <p>{el.description}</p>
        </div>
      );
    });
  };
  return <div>{ShowStudents()}</div>;
}

export default CarsList;
