import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import './styles.css';  // Import custom styles

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        const promises = response.data.results.map(pokemon => axios.get(pokemon.url));
        return Promise.all(promises);
      })
      .then(results => {
        setPokemons(results.map(result => result.data));
      })
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8 bounce-animation">Pokémon Search</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={handleSearch}
        className="block mx-auto mb-8 p-4 w-full max-w-md border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
