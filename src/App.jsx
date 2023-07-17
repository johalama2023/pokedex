import { Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonInfo from './components/pokedex/PokemonInfo';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
