import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie App</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
