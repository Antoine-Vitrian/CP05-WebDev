// src/components/Header.jsx
import React from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="bg-gray-900 p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Catálogo de Filmes</h1>
        <input
          type="text"
          placeholder="Buscar por título..."
          className="w-1/2 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
