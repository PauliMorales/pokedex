import { useEffect, useState } from "react";
import useFetch from "../../hooks/UseFetch";
import PokeCard from "./PokeCard";
import "./styles/pokecontainer.css";
import Pagination from "./Pagination";

const PokeContainer = ({ formUrl }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl);
  const [data, setData] = useState();

  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  return (
    <>
      <div className="poke-Container">
        {data &&
          data.map((pokemon) => {
            console.log(pokemon);
            return (
              <PokeCard
                key={
                  pokemon && pokemon?.pokemon
                    ? pokemon.pokemon.name
                    : pokemon.name
                }
                url={
                  pokemon && pokemon?.pokemon
                    ? pokemon.pokemon.url
                    : pokemon.url
                }
              />
            );
          })}
      </div>
      <Pagination
        rows={pokemons?.results?.length || pokemons?.pokemon?.length}
        data={pokemons?.results || pokemons?.pokemon}
        setData={setData}
      />
    </>
  );
};

export default PokeContainer;
