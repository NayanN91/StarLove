import { useState, useEffect } from "react";
import Card from "../Components/Card"


const Characters = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setPeoples(res));
  }, []);

  return (
    <>
      <div>
        {peoples.map((people) => {
          return <Card
          name={people.name}
          image={people.image}
          gender={people.gender}
          height={people.height}
          species={people.species}
          cybernetics={people.cybernetics} />;
        })}
        </div>
    </>
      );
};
      
export default Characters;


        