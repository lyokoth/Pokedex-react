import { fetchPokemonLocation } from "../../../Routing/api";
import { useContext, useState, useEffect } from "react";
import PokedexContext from "../../../../functions/Context";
import { Heading, Card, Button} from '@chakra-ui/react';

const Location = ({ locationActive, setLocationActive}) => {
    const [locations, setLocations] = useState([]);
    const { location, setLocation } = useContext(PokedexContext);

    useEffect(() => {
        const fetchLocation = async () => {
            const data = await fetchPokemonLocation();
            setLocations(data);
        }
        fetchLocation();
    }, []);


    return (
        <>
        <section className={`${locationActive ? 'active' : ''} location-container`}>
          <Heading as="h1" className="bio-heading">Location</Heading> 
            <Card className="location-card">
               <Button onClick={() => setLocationActive(!locationActive)} className="location-button">Close</Button>
               <ul>
                {location.length > 0 
                ? location.map((location, index) => (
                          <li 
                          key={index}
                          className="location-list">
                            {location.location_area.name}

                          </li>

                     ))
                     : "Could not fetch location." }
                </ul>
    
            </Card>
        </section>
        </>
    );
}
export default Location;
