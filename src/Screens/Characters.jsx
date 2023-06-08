import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/card";

const Characters = () => {
  const [peoples, setPeoples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
  };

  const handleSecondNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
  };

  return (
    <>
      <div>
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
      <button onClick={handleNext}>Next</button>
      <button onClick={handleSecondNext}>Next (2nd)</button>
    </>
  );
};

export default Characters;
        