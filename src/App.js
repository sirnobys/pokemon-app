import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { PokemonContext } from './contexts/PokemonContext';
import { links } from './contants';




function App() {
  const [pokemonData, setPokemonData] = useState([])
  return (
    <div className="">
      <PokemonContext.Provider value={{pokemonData,setPokemonData}}>
        <Main/>
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
