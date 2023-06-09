import React from "react"
import "./Nav.css"
import { useState } from "react";

const Nav = () => {

  const [showLinks, setShowLinks] = useState(false)

const handleShowLinks = () =>{
  setShowLinks(!showLinks)
}

console.log(showLinks)

  return(
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo">Logo</div>
      <ul className= "navbar_links">
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            Acceuil
          </a>
        </li>
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            Portfolio
          </a>
        </li>
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            Services
          </a>
        </li>
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            A propos
          </a>
        </li>
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Nav;
