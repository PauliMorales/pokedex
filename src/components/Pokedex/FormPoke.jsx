import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import "./styles/formpoke.css";

const FormPoke = ({ setFormUrl, urlBase }) => {
  const inputPoke = useRef();
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`;
    navigate(path);
  };

  const handleChange = (e) => {
    setFormUrl(e.target.value);
  };

  return (
    <div className="formpoke">
      <form className="formpoke__form" onSubmit={handleSubmit}>
        <input className="formpoke__input" ref={inputPoke} type="text" placeholder="Name of your Pokemon"/>
        <button className="formpoke__btn">Search</button>
      </form>
      <select className="formpoke__select" onChange={handleChange}>
        <option className="formpoke__allpokemons" value={urlBase}>
          All Pokemons
        </option>
        {types?.results.map((type) => (
          <option
            className="formpoke__typepoke"
            key={type.url}
            value={type.url}
          >
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormPoke;
