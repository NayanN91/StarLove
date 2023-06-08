import React, { useState, useEffect } from "react";
import Card from "../Components/card";
import "./Characters.css";
import buttonTesMoche from "../assets/buttonTesMoche.png";
import buttonTesBeau from "../assets/buttonTesBeau.png";
import buttonTesMagnifique from "../assets/buttonTesMagnifique.png";

const Characters = () => {
  const [peoples, setPeoples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSwipeLeft, setIsSwipeLeft] = useState(false);
  const [isSwipeRight, setIsSwipeRight] = useState(false);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setPeoples(res));
  }, []);

  const handleNext = () => {
    setIsSwipeLeft(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
      setIsSwipeLeft(false);
      setIsFavorite(false);
    }, 800);
  };

  const handleSecondNext = () => {
    setIsSwipeRight(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
      setIsSwipeRight(false);
      setIsFavorite(false);
    }, 800);
  };

  const handleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div>
      <div
        className={`card-container ${
          isSwipeLeft ? "swipe-left transition" : ""
        } ${isSwipeRight ? "swipe-right transition" : ""}`}
      >
        {peoples.length > 0 ? (
          <Card
            name={peoples[currentIndex].name}
            image={peoples[currentIndex].image}
            gender={peoples[currentIndex].gender}
            height={peoples[currentIndex].height}
            species={peoples[currentIndex].species}
            cybernetics={peoples[currentIndex].cybernetics}
            born={peoples[currentIndex].born}
            homeworld={peoples[currentIndex].homeworld}
          />
        ) : (
          <p></p>
        )}
      </div>
      <div className="allbuttons">
        <button onClick={handleNext} className="dislike-button">
          <img className="tesmoche" src={buttonTesMoche} alt="Dislike" />{" "}
        </button>
        <button
          onClick={handleFavorite}
          className={`favorite-button ${isFavorite ? "active" : ""}`}
        >
          <img className="tesbeau" src={buttonTesMagnifique} alt="superlike" />{" "}
        </button>
        <button onClick={handleSecondNext} className="like-button">
          <img className="tesbeau" src={buttonTesBeau} alt="like" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Characters;
