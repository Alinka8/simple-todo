import React from "react";
import { cars } from "./carsData";
import Card from "../card/Card";
import "./carsList.style.css";

function CarsList() {
  const showCars = cars.map((el, index) => {
    return <Card cardData={el} key={index} />;
  });
  return <div className="cars-container">{showCars}</div>;
}
export default CarsList;
