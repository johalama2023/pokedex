import React from 'react'
import { Link } from 'react-router-dom';
import './styles/PokemonNotFound.css'

const PokemonNotFound = () => {
  return (
    <div className='pokeNotFound__container'>
      <h1 className='pokemonNotFound__title'>Pokemon not found</h1>
      <Link className='pokemonNotFound__link' to="/pokedex">Return to pokedex</Link>
    </div>
  );
}

export default PokemonNotFound