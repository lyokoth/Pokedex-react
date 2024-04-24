import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonAblities = ({ abilities, setAbilityDescription}) => {

    const [abilityDescription] = useState("");

    useEffect(() => {
        const fetchAbilityDescription = async () => {
            try {
                const response = await axios.get(abilities.ability.url);
                setAbilityDescription(response.data.effect_entries[0].effect);
            } catch (error) {
                console.error("Could not fetch ability description: ", error);
            }
        };

        fetchAbilityDescription();
    }, [abilities.ability.url, setAbilityDescription]);

    return (
        <>
            <h4>{abilities.ability.name}</h4>
            <p>{abilityDescription}</p>
        </>
    );
}
export default PokemonAblities;