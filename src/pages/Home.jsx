import FormNameUser from "../components/Home/FormNameUser";
import pokedex from "../assets/images/pokedex.png";
import './styles/home.css'

const Home = () => {
  return (
    <div className="home__container">
      <img className="home__img" src={pokedex} alt="" />
      <h2 className="home__hi">¡Hi Trainer!</h2>
      <p className="home__paragraph"> Please give us your trainer name to start! </p>
      <FormNameUser />
      <footer className="home__footer">
        <div className="home__footer-circle">
          <div className="home__footer-incircle"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
