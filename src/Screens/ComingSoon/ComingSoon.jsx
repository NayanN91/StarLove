import React from "react";
import "./ComingSoon.css";
import Abdou from "../../assets/Images/Abdou.jpg";

const ComingSoon = () => {
  return (
    <div className="comingSoonContainer">
      <h1>COMING SOON</h1>
      <div className="comingSoonContent">
        <img src={Abdou} alt="Abdou" />
      </div>
    </div>
  );
};

export default ComingSoon;
