import React from "react";
import Inscription from "./Screens/Inscription/Inscription";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./Screens/AuthPage/AuthPage";
import Characters from "./Screens/Characters/Characters";
import Authdata from "../src/data/AuthData.json";
import Navbar from "./Components/NavBar/NavBar";
import "./App.css";
import ComingSoon from "./Screens/ComingSoon/ComingSoon";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div className="App">
        {isLogged ? (
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/services" element={<ComingSoon />} />
          </Routes>
        ) : (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthPage Authdata={Authdata} setIsLogged={setIsLogged} />
                }
              />
              <Route path="/inscription" element={<Inscription />} />
              <Route path="/services" element={<ComingSoon />} />
            </Routes>
          </>
        )}
        <Navbar setIsLogged={setIsLogged} isLogged={isLogged} />
      </div>
    </>
  );
}
export default App;
