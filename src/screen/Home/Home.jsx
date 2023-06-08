import Navbar from "../../components/NavBar";
import "./Home.css";

const Home = ({ setIsLogged }) => {
  return (
    <>
    {}
      <Navbar setIsLogged={setIsLogged} />
      <div className="homeContainer">
        <h1>AdopteUnJedi</h1>
      </div>
    </>
  );
};

export default Home;
