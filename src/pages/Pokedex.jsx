import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/pokedex/Pagination';
import Pokecard from './../components/pokedex/Pokecard';
import Header from './Header';
import './styles/Pokedex.css';

const Pokedex = () => {
  const { trainer } = useSelector((state) => state);

  const [pokemons, setPokemons] = useState();
  const [types, setTypes] = useState();
  const [typeSelected, setTypeSelected] = useState('All pokemons');

  const navigate = useNavigate();

  useEffect(() => {
    if (typeSelected !== 'All pokemons') {
      axios
        .get(typeSelected)
        .then((res) => setPokemons(res.data.pokemon.map((e) => e.pokemon)))
        .catch((err) => console.log(err));
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=999999999';
      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/';
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(types);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim().toLowerCase();
    navigate(`/pokedex/${input}`);
  };

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
    setPage(1);
  };

  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(10);
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;
  const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage);

  return (
    <div>
      <header className="pokedex__header">
        <Header />
        <p className="pokedex-p">
          <span className="pokedex-span">Welcome {trainer}</span>, here you can
          find your favorite pokemon
        </p>
      </header>
      <section className="pokedex__section">
        <form className='pokedex__form' onSubmit={handleSubmit}>
          <input className='pokedex__input' id="search" type="text" placeholder='Search Your Pokemon!!!'/>
          <button className='pokedex__btn'>Search</button>
        </form>
        <select className='pokedex__select' onChange={handleChange}>
          <option className='pokedex__option' value="All pokemons">All Pokemons</option>
          {types?.map((type) => (
            <option className='pokedex__option' value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </section>
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      <div className="poke-container">
        {pokemons?.slice(initialPoke, finalPoke).map((poke) => (
          <Pokecard key={poke.url} url={poke.url} />
        ))}
      </div>
      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  );
};

export default Pokedex;
