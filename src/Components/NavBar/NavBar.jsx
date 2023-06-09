import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const Navbar = ({ setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged(false);
  };

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  console.log(showLinks);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="LogoBan">
        <img
          src="src\assets\LogoNavBarResize.png"
          alt="Logo Adopte un Jedi"
        />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="" className="navbar_link">
            Acceuil
          </a>
        </li>
        <li className="navbar_item">
          <a href="#" className="navbar_link">
            Services
          </a>
        </li>
        
          <li className="navbar_logout">
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};
export default Navbar;
