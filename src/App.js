import './App.css';
import Nav from './Components/Navbar/Nav';
import { About } from './pages/About/About.jsx';
import Pokedex from './Components/Pokedex/Pokedex.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeaturedPokemon from './Components/Home/FeaturedPokemon/FeaturedPokemon.js';
import HomeNav from './Components/Home/HomeNav.js';
import RegistrationForm from './pages/Accounts/RegistrationForm.js';
import Footer from './Components/Footer/Footer.js';
import Settings from './pages/Settings/Settings.js';
import PokemonSearch from './Components/Pokedex/Search/PokemonSearch.js';
import Login from './pages/Accounts/Login.js';
import ComingSoon from './pages/Soon/ComingSoon.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <FeaturedPokemon />
                <HomeNav />
                <Footer />
              </>
            } />
            <Route path="/pokedex" element={<PokemonSearch />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/pokedex/kanto-pokedex" element={<PokemonSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/natures" element={<ComingSoon />} />
            <Route path="/teambuilder" element={<ComingSoon />} />
            <Route path="/types" element={<ComingSoon />} />
            <Route path='/pokemon/:id' element={<Pokedex />} />
            <Route path="/abilities" element={<ComingSoon />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
