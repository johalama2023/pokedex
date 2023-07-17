import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Pokecard.css';

const Pokecard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
  console.log(pokemon);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate({});
  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };
  

  return (
    <div className="pokeCard__container">
      <article className={`card-poke`} onClick={handleClick}>
        <div className={`pokeCard__border ${pokemon?.types[0].type.name}`}>
          <div className="pokeHeader__container">
            <header className="card-poke__header">
              <div className={`card-poke__bg ${pokemon?.types[0].type.name}`}></div>
              <img
                className="card-poke__img"
                src={pokemon?.sprites.other.home.front_default}
                alt=""
              />
            </header>
          </div>
          <section className="card-poke__body">
            <h3 className="card-poke__name">{pokemon?.name}</h3>
            <ul className="card-poke__types-container">
              {pokemon?.types.map((type) => (
                <li
                  key={type.slot}
                  className={`card-poke__type ${type.type.name}`}
                >{`${type.type.name} `}</li>
              ))}
            </ul>
            <p className="card-poke__type-label">Type</p>
            <hr />
            <ul className="card-poke__stats-container">
              {pokemon?.stats.map((stat) => (
                <li key={stat.stat.name} className="card-poke__stat">
                  <span className="card-poke__stat-label">
                    {stat.stat.name}
                  </span>
                  <br />
                  <span className="card-poke__stat-number">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Pokecard;
