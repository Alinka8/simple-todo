import React from "react";
import PropTypes from "prop-types";
import "./card.style.css";

function Card(props) {
  console.log(props);
  const { name, picture, description } = props.cardData;
  return (
    // <div className="info" key={index}>
    //   <img src={props.studentData.picture} width="50px" />
    //   <h1>{props.studentData.name}</h1>
    //   <p>{props.studentData.description}</p>
    // </div>
    <div style={{ width: "50%" }}>
      <img src={picture} />
      <h1>{name}</h1>
      <p>{description}</p>
      {/* <p>Batch: {props.batch}</p> */}
    </div>
  );
}

Card.propTypes = {
  // batch: PropTypes.number.isRequired,
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Card;
