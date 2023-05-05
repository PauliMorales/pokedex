import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useEffect } from "react";
import pokerror from "../assets/images/error.gif";
import pokedex from "../assets/images/pokedex.png";
import goback from "../assets/images/goback.png";
import "../components/Pokedex/styles/pokecard.css";
import "./styles/poke-info.css";
import "./styles/pokedex.css";

const PokeInfo = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name]);

  return (
    <div className="pokeInfo">
      {hasError ? (
        <div className="pokeInfo__error">
          <Link to="/pokedex">
            <img
              className="pokeInfo__error-goback"
              src={goback}
              alt="go-back"
            />
          </Link>
          <img className="pokeInfo__error-img" src={pokerror} alt="" />
          <h2 className="pokeInfo__error-text">This pokemon doesnt exist!!</h2>
        </div>
      ) : (
        <div className="pokeInfo__all">
          <header className="pokedex__header">
            <div className="pokedex__header-circle">
              <div className="pokedex__header-incircle"></div>
            </div>
            <h1 className="pokedex__title">
              <img className="pokedex__img" src={pokedex} alt="" />
            </h1>
          </header>
          <div className="pokeInfo__container">
            <div className={`pokeInfo__img bg-${pokemon?.types[0].type.name}`}>
              <img
                className="pokeInfo__img-poke"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>

            <div className="pokeInfo__id">
              <h2
                className={`pokeInfo__id-name color-${pokemon?.types[0].type.name}`}
              >
                {pokemon?.name}
              </h2>
              <span
                className={`pokeInfo__id-id color-${pokemon?.types[0].type.name}`}
              >
                #{pokemon?.id}
              </span>
            </div>

            <div className="pokeInfo__measures">
              <span className="pokeInfo__measures-title">
                Height{" "}
                <p
                  className={`pokeInfo__measures-value color-${pokemon?.types[0].type.name}`}
                >
                  {pokemon?.height}
                </p>
              </span>
              <span className="pokeInfo__measures-title">
                Weight{" "}
                <p
                  className={`pokeInfo__measures-value color-${pokemon?.types[0].type.name}`}
                >
                  {pokemon?.weight}
                </p>
              </span>
            </div>

            <section className="pokeInfo__qualities">
              <div className="pokeInfo__qualities-container">
                <h2>Types</h2>
                <ul className="pokeInfo__qualities-list">
                  {pokemon?.types.map((objType, index) => (
                    <li
                      className={`pokeInfo__qualities-value bg-${pokemon?.types[index].type.name}`}
                      key={objType.type.url}
                    >
                      {objType.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pokeInfo__qualities-container">
                <h2>Ability</h2>
                <ul className="pokeInfo__qualities-list">
                  {pokemon?.abilities.map((objAbi) => (
                    <li clas key={objAbi.ability.url}>{objAbi.ability.name}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="pokeInfo__stats">
              <h2>Stats</h2>
              <ul>
                {pokemon?.stats.map((objStat) => (
                  <li
                    className={`pokeInfo__stats-type bg-${pokemon?.types[0].type.name}`}
                    key={objStat.stat.url}
                    style={{
                      background: `linear-gradient(
                      90deg, rgba(221, 26, 26) 0px, 
                      rgba(237, 143, 143) ${objStat.base_stat}%, 
                      rgb(231, 231, 231) ${objStat.base_stat}%, 
                      rgb(231, 231, 231) 100%)`,
                    }}
                  >
                    <span className="pokemon-stats_label">
                      {objStat.stat.name}
                    </span>
                    <span
                      className={`pokemon-stats_value color-${pokemon?.types[0].type.name}`}
                    >
                      {objStat.base_stat}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pokeinfo__moves">
              <h3>Special Moves</h3>
              <ul className="pokeinfo__moves-list">
                {pokemon?.moves.map((objMove) => (
                  <li className="pokeinfo__moves-item" key={objMove.move.url}>
                    {objMove.move.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokeInfo;
