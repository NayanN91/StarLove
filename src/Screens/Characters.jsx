import React, { useState, useEffect } from "react";
import Card from "../Components/card";

const Characters = () => {
  const [peoples, setPeoples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setPeoples(res));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
  };

  const handleSecondNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peoples.length);
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
      <button onClick={handleNext}>Dislike</button>
      <button onClick={handleSecondNext}>Like</button>
    </>
  );
};

export default Characters;

        