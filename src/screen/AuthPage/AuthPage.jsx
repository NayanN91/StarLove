import { useState } from "react";
import "./AuthPage.css";
import Logo from "../../assets/Images/LogoSite.png";
const AuthPage = ({ Authdata, setIsLogged }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log(formData);
  const [isEror, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;
    const foundUser = Authdata.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      setIsLogged(true);
      setIsError(false);
      console.log("Utilisateur authentifié");
    } else {
      console.log("Erreur d'authentification");
      setIsLogged(false);
      setIsError(true);
    }
  };

  return (
    <div className="auth-page">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      {isEror && (
        <p className="errorMessage">Erreur d&lsquo;authentification</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          {/* <AiOutlineUser className="icon" /> */}
          <input
            className="inputuser"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
          />
        </div>
        <br />
        <div className="inputContainer">
          {/* <RiLockPasswordFill className="icon" /> */}
          <input
            className="inputuser"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
          />
        </div>
        <br />
        <div className="inputContainerButton">
          <button className="submitButton">Inscription</button>
        </div>
        <br />
        <div className="inputContainerButton">
          <button className="submitButton">Connexion</button>
        </div>
        <br />
        <div className="inputContainerButton">
          <div className="forgetPasswordContainer">
            <a>Mot de passe oublié ?</a>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AuthPage;
