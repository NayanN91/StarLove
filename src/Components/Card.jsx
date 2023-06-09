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
          <p className="homeworld">  {props.homeworld} </p>
        </div>
        <div className="back">

          <h4 className="nameback">  {props.name} </h4>
            <h5 className="homeworldback"> {props.homeworld} </h5>

          <h3 className="born"> Je suis né en {props.born} et je mesure {props.height} </h3>
          <p className="genre"> Je suis un(e) {props.gender}  {props.species}</p>
          <p className="cyber"> Cybernetics: {props.cybernetics}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
