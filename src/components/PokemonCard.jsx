import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="mx-auto mb-4 w-32 h-32 object-cover rounded-full border border-gray-200 transition-transform duration-300 hover:rotate-12"
      />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p className="text-gray-600">ID: {pokemon.id}</p>
      <p className="text-gray-600">Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonCard;