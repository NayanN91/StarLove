
import React from 'react';
import Inscription from './components/Inscription/Inscription';
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
        <Routes>
        <Route path="/" element={<Characters />} />
        </Routes>
        ) : (
            <Routes>
              <Route path='/' element={<AuthPage  Authdata={Authdata} setIsLogged={setIsLogged}/>} />
              <Route path="/inscription" element={<Inscription />} />
          </Routes>
        )}
      
          </div>

    </>
  );
}
 export default App;



  
 