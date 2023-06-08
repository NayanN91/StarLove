import React, { useState, useEffect } from "react";
import Card from "../Components/card";
import "./Characters.css"



const Characters = () => {
  const [peoples, setPeoples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setPeoples(res));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
    setIsFavorite(false); 
  };

  const handleSecondNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
    setIsFavorite(false); 
  };

  const handleFavorite = () => {
    setIsFavorite((prevState) => !prevState); 
  };

  return (
    <>
      <div className="caracters-container">
        {peoples.length > 0 ? (
          <Card
            name={peoples[currentIndex].name}
            image={peoples[currentIndex].image}
            gender={peoples[currentIndex].gender}
            height={peoples[currentIndex].height}
            species={peoples[currentIndex].species}
            cybernetics={peoples[currentIndex].cybernetics}
          />
        ) : (
          <p></p>
        )}
      </div>
      <button onClick={handleNext} className="dislike-button">
        <i className="fas fa-times"></i>
      </button>
      <button onClick={handleFavorite} className={`favorite-button ${isFavorite ? "active" : ""}`}>
        <i className={`fas ${isFavorite ? "fa-star" : "fa-star-o"}`}></i>
      </button>
      <button onClick={handleSecondNext} className="like-button">
        <i className="fas fa-heart"></i>
      </button>
    </>
  );
};

export default Characters;