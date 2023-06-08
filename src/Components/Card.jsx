import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
        <div className="front">
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
          <p>Born: {props.born}</p>
        </div>
        <div className="back">
          <h3>Homeworld: {props.homeworld}</h3>
          <p>Height: {props.height}</p>
          <p>Cybernetics: {props.cybernetics}</p>
          <p>Gender: {props.gender}</p>
          <p>Species: {props.species}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;