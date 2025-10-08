// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

// Coloque sua chave da OMDb API aqui
const API_KEY = '75cec2be';
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function App( ) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('avengers'); // Termo de busca inicial

  // Função para buscar filmes na API
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]); // Limpa os filmes se a busca não retornar nada
      }
    } catch (error) {
      console.error("Falha ao buscar filmes:", error);
      setMovies([]); // Limpa em caso de erro de rede
    }
  };

  // useEffect para carregar dados quando o componente monta
  useEffect(() => {
    searchMovies(searchTerm);
  }, []); // O array vazio faz com que rode apenas uma vez

  // useEffect para buscar sempre que o termo de busca muda (após um pequeno delay)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        searchMovies(searchTerm);
      } else {
        // Se o campo de busca estiver vazio, podemos limpar a lista ou buscar um termo padrão
        searchMovies('avengers');
      }
    }, 500); // Delay de 500ms para não fazer uma requisição a cada tecla digitada

    return () => clearTimeout(delayDebounceFn); // Limpa o timeout anterior
  }, [searchTerm]);

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="container mx-auto py-8">
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
