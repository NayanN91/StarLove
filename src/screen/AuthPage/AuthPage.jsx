import { useState } from "react";
import "./AuthPage.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const AuthPage = ({ Authdata, setIsLogged }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isEror, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const foundUser = Authdata.find(
      (user) => user.email === email && user.password === password
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
      {isEror && (
        <p className="errorMessage">Erreur d&lsquo;authentification</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <AiOutlineUser className="icon" />
          <input
            className="inputuser"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nom d'utilisateur"
          />
        </div>
        <br />
        <div className="inputContainer">
          <RiLockPasswordFill className="icon" />
          <input
            className="inputuser"
            type="password"
            name="password"
            value={formData.email}
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
            <a>Mot de passe oublié</a>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AuthPage;
