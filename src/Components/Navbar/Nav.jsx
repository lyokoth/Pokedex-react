import React from 'react';
import Logo from '../../assets/pokeball-white.png';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Image, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, SettingsIcon } from '@chakra-ui/icons';
import './Nav.css';
import Toggler from './Toggler/Toggler';

function Nav() {
 const [isActive, setIsActive] = React.useState(false);
    const toggleActive = () => {
        setIsActive(!isActive);
    };
   

    return (
        <nav className="navigation">
            <Image src={Logo} alt="Pokeball" className="logo" />
            
            <List className="nav">

                <ListItem>
                    <NavLink to="/" 
                 
                    className={({ isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "nav-link"
                }
                >Home</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/pokedex" className={({ isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "nav-link"
                }
                >Pokédex</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/settings" className={({ isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "nav-link"
                }
                > <SettingsIcon />Settings</NavLink>
                   
                </ListItem>
            </List>
            <Toggler />
        </nav>
    );
}

export default Nav;
