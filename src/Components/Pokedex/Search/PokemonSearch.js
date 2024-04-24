import React, { useState } from "react";
import Header from "./Header";
import PokeList from "../PokeList";
import Generation from "../GenerationFilter/Generation";
//import GenCard from "../GenerationFilter/GenCard";
import TypeFilter from "./TypesFilter/TypeFilter";
import "./PokemonSearch.css";
import DropDown from "./Menu/DropDownMenu/DropDown";
import SearchForm from "./SearchForm";

const PokemonSearch = ({setAllPokemon}) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchGeneration, setSearchGeneration] = useState(false);
  const [typesFilter, setTypesFilter] = useState(false);

  const handleGenClick = () => {
    setSearchGeneration(false);
    console.log('Gen Clicked')
  }

  return (
    <section className="search-bar relative">
      <Header
        setSearchGeneration={setSearchGeneration}
        searchGeneration={searchGeneration}  
      
      />

      <DropDown
        searchActive={searchActive}
        setSearchActive={setSearchActive}
        setTypesFilter={setTypesFilter}
        typesFilter={typesFilter}
      />
      <PokeList/>
      {searchGeneration && (
        <Generation searchGeneration={searchGeneration}  />
      )}
      {searchActive && (
        <SearchForm
          searchActive={searchActive}
          setSearchActive={setSearchActive}
        />
      )}
      
    {typesFilter && (
        <TypeFilter
          typesFilter={typesFilter}
          setTypesFilter={setTypesFilter}
        />
      )}

    </section>
  );
};

export default PokemonSearch;
