import React from "react";
import { studentsDemo } from "./studentsDatademo";
import "./studentsList-demo.style.css";

function StudentsListDemo() {
  const showStudents = () => {
    return studentsDemo.map((el, index) => {
      return (
        <div className="infoo" key={index}>
          <img src={el.picture} />
          <h1>{el.name}</h1>
          <p>{el.hobby}</p>
        </div>
      );
    });
  };
  return <div className="info-containerr">{showStudents()}</div>;
}

export default StudentsListDemo;
