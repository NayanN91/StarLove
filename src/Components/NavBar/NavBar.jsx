import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const Navbar = ({ setIsLogged, isLogged }) => {
  const handleLogout = () => {
    setIsLogged(false);
    handleShowLinks();
  };

  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  console.log(showLinks);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="LogoBan">
        <img src="src\assets\LogoNavBarResize.png" alt="Logo Adopte un Jedi" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link to="/" className="navbar_link" onClick={handleShowLinks}>
            Acceuil
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/services"
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Services
          </Link>
        </li>
        {isLogged && (
          <li className="navbar_logout">
            <Link to={"/"} className="navbar_link" onClick={handleLogout}>
              Déconnexion
            </Link>
          </li>
        )}
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};
export default Navbar;
