import "./NavBar.css";

const Navbar = ({ setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <nav className="navbar">
        <button onClick={handleLogout}>Déconnexion</button>
    </nav>
  );
};

export default Navbar;
