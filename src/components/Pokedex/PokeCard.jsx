import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import "./styles/pokecard.css";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, getPokemonById] = useFetch(url);

  useEffect(() => {
    getPokemonById();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`);
  };

  return (
    <article
      onClick={handleClick}
      className={`pokemon border-${pokemon?.types[0].type.name}`}
    >
      <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
        <img
          className="pokemon__sprite"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="pokemon__body">
        <h2 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>
          {pokemon?.name}
        </h2>
        <ul className="pokemon__types">
          {pokemon?.types.map((objType) => (
            <li className="pokemon__type-specific" key={objType.type.url}>
              {objType.type.name}
            </li>
          ))}
        </ul>
        <ul className="pokemon__stats">
          {pokemon?.stats.map((objStat) => (
            <li className="pokemon__stats-specific" key={objStat.stat.url}>
              <span className="pokemon__stats-label">{objStat.stat.name}</span>
              <span
                className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}
              >
                {objStat.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
