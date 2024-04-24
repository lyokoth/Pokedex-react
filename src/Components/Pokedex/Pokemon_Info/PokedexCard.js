import {useContext, useState} from 'react'; 
import PokedexContext from '../../../functions/Context';
import About from './Tabs/About';
import Stats from './Tabs/Stats';
import Sprites from './Tabs/Sprites';


const PokedexCard = ({pokemon}) => {
   
    const [about, setAbout] = useState(true);
    const [evolution, setEvolution] = useState(false);
    const [moves, setMoves] = useState(false);
    const [stats, setStats] = useState(false);
    const [sprites, setSprites] = useState(false);
    


    
    return (
        <section className='pokedexCard'>
              <section className='flex items-center justify-between border-b mb-4 text-sm w-full'>
                <button
                    className={`${about ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setAbout(!about);
                        setEvolution(false);
                        setMoves(false);
                        setStats(false);
                    }}
                >
                    About
                </button>
                <button
                    className={`${stats ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setStats(!stats);
                        setAbout(false);
                        setEvolution(false);
                        setMoves(false);
                    }}
                    >
                        Base Stats
                    </button>
                   
                    <button 
                    className={`${sprites ? "detailsBtn active" : "detailsBtn"}`}
                    onClick={() => {
                        setSprites(!sprites);
                        setAbout(false);
                        setEvolution(false);
                        setMoves(false);
                        setStats(false);
                    }}
                    >
                        Sprites
                    </button>
         </section>
         {about && <About about={about} />}
            {stats && <Stats stats={stats} />}
        {sprites && <Sprites sprites={sprites} />}
        </section>
    );
                };
export default PokedexCard;