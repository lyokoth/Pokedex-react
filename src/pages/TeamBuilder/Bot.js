import {React, useState, useEffect, useContext} from 'react';
import PokedexContext from '../../functions/Context';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Bot({pokemon}) {
    const [botTeam, setBotTeam] = useState(false);
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const fetchTeamOne = async () => {
            try {
                const response = await fetch('/teams/team-1');
                const data = response.json();
                console.log(data)
            } catch (error) {
                console.log('Could not fetch Bot Team' + error);
            } finally {
                setLoading(false);

            }
        };

        fetchTeamOne();

    }, [pokemon]);


    return (
<>
</>
    )
}
