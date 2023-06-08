import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="front">
          <div
            className="image"
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="name">{props.name}</h2>
          <p className="born">naquit en l'an: {props.born}</p>
        </div>
        <div className="back">
          <h3 className="homeworld">Homeworld: {props.homeworld}</h3>
          <p className="height">Height: {props.height}</p>
          <p className="cyber">Cybernetics: {props.cybernetics}</p>
          <p className="genre">Gender: {props.gender}</p>
          <p className="espece">Species: {props.species}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
