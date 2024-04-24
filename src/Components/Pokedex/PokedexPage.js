import React, { useState } from "react";
import PokeList from "./PokeList";
import {allPokemon} from "../../Routing/api";
// import Pagination from "./Pagination";
const PokedexPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const itemsPerPage = 151;
    
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        };

    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage;
    const currentPokemon = allPokemon.slice(startIndex, endIndex);

    return (
        <div>
            <PokeList
                allPokemon={currentPokemon}
                />
            <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={allPokemon.length}
                onPageChange={handlePageChange}
                />
        </div>
    );
}
export default PokedexPage;