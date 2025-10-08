// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  // Se a API retornar 'N/A' para o poster, usamos uma imagem placeholder
  const poster = movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450?text=No+Image' : movie.Poster;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={poster} alt={`${movie.Title} poster`} className="w-full h-96 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
   );
};

export default MovieCard;
