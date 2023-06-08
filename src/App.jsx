import { useState } from "react";
import AuthPage from "./screen/AuthPage/AuthPage";
import Home from "./screen/Home/Home";
import Authdata from "../src/data/AuthData.json";
import "./App.css";



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
    </>
  );
}

export default App;
