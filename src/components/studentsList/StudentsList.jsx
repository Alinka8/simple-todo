// import React from "react";
// import { students } from "./studentsData";
// import "./studentsList.style.css";

// function StudentsList() {
//   const showStudents = () => {
//     return students.map((el, index) => {
//       return (
//         <li key={index}>
//           {el.name} loves {el.hobby} <img src={el.picture} width="50px;" />
//         </li>
//       );
//     });
//   };
//   return <ol>{showStudents()}</ol>;
// }

// export default StudentsList;

import React from "react";
import "./studentsList.style.css";
import { students } from "./studentsData";
import Card from "../card/Card";

function StudentsList() {
  const showStudents = students.map((el, index) => {
    return <Card cardData={el} key={index} batch={1} />;
  });
  return <div className="info-container">{showStudents}</div>;
}

export default StudentsList;
