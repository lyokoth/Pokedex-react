import React from "react";

import { Routes, Route } from "react-router-dom";


import RegistrationForm from './RegistrationForm';
import Pokedex from "../Pokedex/PokeList";

function Routing() {

    return (
        <div>
        <Routes>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/account" element={<RegistrationForm />} />
        </Routes>
        </div>
    );
    }
export default Routing;