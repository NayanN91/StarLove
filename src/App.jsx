import { useState } from "react";
import AuthPage from "./screen/AuthPage/AuthPage";
import Home from "./screen/Home/Home";
import Authdata from "../src/data/AuthData.json";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./Screens/Characters";



function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <div className="App">
        {isLogged ? (
          <Home setIsLogged={setIsLogged} />
        ) : (
          <AuthPage Authdata={Authdata} setIsLogged={setIsLogged} />
          )}
          </div>
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
