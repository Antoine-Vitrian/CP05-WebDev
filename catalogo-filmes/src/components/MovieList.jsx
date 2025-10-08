// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  // Renderização condicional: se não houver filmes, mostra uma mensagem.
  if (!movies || movies.length === 0) {
    return <p className="text-white text-center mt-10">Nenhum filme encontrado. Tente uma nova busca!</p>;
  }

  return (
    // Grid responsivo com Tailwind
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {/* Renderização de lista com .map */}
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
