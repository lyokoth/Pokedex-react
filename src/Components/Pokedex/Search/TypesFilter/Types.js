import React from "react";
import { Image } from "@chakra-ui/react";

import Normal from '../../../../assets/types/normal.svg';
import Fire from '../../../../assets/types/fire.svg';
import Water from '../../../../assets/types/water.svg';
import Electric from '../../../../assets/types/electric.svg';
import Grass from '../../../../assets/types/grass.svg';
import Ice from '../../../../assets/types/ice.svg';
import Fighting from '../../../../assets/types/fighting.svg';
import Poison from '../../../../assets/types/poison.svg';
import Ground from '../../../../assets/types/ground.svg';
import Flying from '../../../../assets/types/flying.svg';
import Psychic from '../../../../assets/types/psychic.svg';     
import Bug from '../../../../assets/types/bug.svg';
import Rock from '../../../../assets/types/rock.svg';
import Ghost from '../../../../assets/types/ghost.svg';
import Dragon from '../../../../assets/types/dragon.svg';   
import Dark from '../../../../assets/types/dark.svg';
import Steel from '../../../../assets/types/steel.svg';
import Fairy from '../../../../assets/types/fairy.svg';

const Types = ({ handleTypeClick }) => {
    const typeList = [
        { type: "Normal", symbol: Normal },
        { type: "Fire", symbol: Fire },
        { type: "Water", symbol: Water },
        { type: "Electric", symbol: Electric },
        { type: "Grass", symbol: Grass },
        { type: "Ice", symbol: Ice },
        { type: "Fighting", symbol: Fighting },
        { type: "Poison", symbol: Poison },
        { type: "Ground", symbol: Ground },
        { type: "Flying", symbol: Flying },
        { type: "Psychic", symbol: Psychic },
        { type: "Bug", symbol: Bug },
        { type: "Rock", symbol: Rock },
        { type: "Ghost", symbol: Ghost },
        { type: "Dragon", symbol: Dragon },
        { type: "Dark", symbol: Dark },
        { type: "Steel", symbol: Steel },
        { type: "Fairy", symbol: Fairy }
    ];

    return (
        <div>
            {typeList.map((type, i) => (
                <div key={i} onClick={() => handleTypeClick(type.type)}>
                    <Image src={type.symbol} alt={type.type} />
                </div>
            ))}
        </div>
    );
};

export default Types;
