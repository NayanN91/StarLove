import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./Screens/AuthPage/AuthPage";
import Characters from "./Screens/Characters/Characters";
import Authdata from "../src/data/AuthData.json";
import "./App.css";



function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div className="App">
        {isLogged ? (
          <Characters setIsLogged={setIsLogged} />
        ) : (
          <AuthPage Authdata={Authdata} setIsLogged={setIsLogged} />
          )}
          </div>
      <Routes>
        <Route path="./" element={<AuthPage />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
