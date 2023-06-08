import { Routes, Route } from "react-router-dom";
import "./App.css";
import Characters from "./Screens/Characters";

function App() {
  return (
    <>
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
