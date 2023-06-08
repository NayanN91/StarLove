import { useState } from "react";
import "./AuthPage.css";

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
        <label></label>
        <input className="inputuser"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
        />
        <br />
        <label></label>
        <input className="inputuser"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
        />
        <br />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default AuthPage;
