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

function StudentsList() {
  const showStudents = () => {
    return students.map((el, index) => {
      return (
        <div className="info" key={index}>
          <img src={el.picture} width="50px" />
          <h1>{el.name}</h1>
          <p>{el.hobby}</p>
        </div>
      );
    });
  };
  return <div className="info-container">{showStudents()}</div>;
}

export default StudentsList;
