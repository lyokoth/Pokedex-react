import './App.css';
import Nav from './Components/Navbar/Nav';

import PokeList from './Components/Pokedex/PokeList.js';
import { About } from './pages/About/About.jsx';
import Pokedex from './Components/Pokedex/Pokedex.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FeaturedPokemon from './Components/Home/FeaturedPokemon.js';
// import { FeaturedPokemonCard } from './Components/Home/FeaturedPokemonCard.js';
import HomeNav from './Components/Home/HomeNav.js';
import RegistrationForm from './pages/Accounts/RegistrationForm.jsx';
import Footer from './Components/Footer/Footer.js';
import TeamBuilder from './pages/TeamBuilder/TeamBuilder.js';
import NatureCardList from './pages/Natures/Natures.js';
import Types from './pages/Types/Types.js';
//import PokemonSearch from './Components/Pokedex/PokemonSearch.js';




function App() {
  
  return (
 <div className="App">
     <Router>
      <Nav />
 

       <Routes>
        <Route path= "/pokedex" element={<PokeList/>} />
        <Route path= "/" element={<>
        
   
     
        <FeaturedPokemon />
  
        <HomeNav  />
        <About />
        <Footer />
 
     
        </>} />
        <Route path ="/account" element={<RegistrationForm />} />
        <Route path = "/pokedex" element={<PokeList />} />
                  
        <Route path="/natures" element={<NatureCardList />} />
        <Route path="/teambuilder" element={<TeamBuilder />} />
        <Route path="/types" element={<Types />} /> 
        <Route path='/pokemon/:id' element={<Pokedex />} />
        </Routes>

      </Router>
    </div>


  );
}

export default App;
