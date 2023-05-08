import { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/Pokedex/FormPoke";
import PokeContainer from "../components/Pokedex/pokeContainer";
import pokedex from "../assets/images/pokedex.png";
import "./styles/pokedex.css";
import './styles/home.css'

const Pokedex = ({ setLoading }) => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";
  const [formUrl, setFormUrl] = useState(urlBase);
  const { trainerName } = useSelector((state) => state);

  return (
    <>
    <div className="pokedex__container">
      <header className="pokedex__header">
        <div className="pokedex__header-circle">
          <div className="pokedex__header-incircle"></div>
        </div>
        <h1 className="pokedex__title">
          <img className="pokedex__img" src={pokedex} alt="" />
        </h1>
      </header>
      <p className="pokedex__p">
        <span className="pokedex__span"> ¡ Welcome {trainerName} ! </span>, here
        you can find your favorite pokemon...
      </p>
      <FormPoke
        urlBase={urlBase}
        setFormUrl={setFormUrl}
        setLoading={setLoading}
      />
      <PokeContainer formUrl={formUrl} setLoading={setLoading} />
    </div>
      <footer className="home__footer">
        <div className="home__footer-circle">
          <div className="home__footer-incircle"></div>
        </div>
      </footer>
    </>
  );
};

export default Pokedex;
