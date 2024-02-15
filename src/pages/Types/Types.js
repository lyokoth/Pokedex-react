import React, {useState} from 'react';
import './Types.css';
import { Colors, StatColors } from '../../Components/Routing/api';

const Types = ({ types }) => {
    const [type, setType] = useState(null);
    const [loading, setLoading] = useState(false);
    
    return (
        <div className="type-card">
            <h2>Types</h2>
            <div className="type-container">
                {types.map((type) => {
                    const color = Colors[type.type.name];
                    const styleBg = {
                        backgroundColor: `${color}`,
                    };
                    return (
                        <div className="type" style={styleBg}>
                            {type.type.name}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Types;