import Generation from "../GenerationFilter/Generation";
import React, { useState } from "react";
import Header from "./Header";


const GenerationHeader = () => {
     const [region, setRegion] = useState('');
     const [setGeneration, setSearchGeneration] = useState(false)
     
     const handleClick = (regionName) => {
            setRegion(regionName);
            console.log('Selected region:', regionName);
         };

    return (
        <div>
            <Header region={region} />
            <Generation handleClick={handleClick} />
        </div>
    );
};
export default GenerationHeader;