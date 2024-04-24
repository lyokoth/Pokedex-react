import React from 'react';

import logo from '../../assets/pokeball-white.png';
//import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {Menu, MenuButton, MenuList, MenuItem, Button, MenuOptionGroup, MenuDivider, MenuItemOption} from '@chakra-ui/react';
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons';
import './Nav.css';
import Toggler from './Toggler/Toggler';




const Nav = () => {

    return (
        <nav className="navigation">
            <img src={logo} alt="pokeball" className="logo" />
            <ul className="nav">
                <li className="link"><Link to="/">Home</Link></li>
              
                <li className="link"><Link to="/pokedex">Pokédex</Link></li>
                <li className="link"><Link to="/teambuilder">Team Builder</Link></li>
                <li className="link"><a href="/about">About</a></li>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}  colorScheme="blue">
                        Settings
                    </MenuButton>
                    
                    <MenuList>
                    <MenuOptionGroup defaultValue ='asc' title='Account'>
                        <MenuItemOption><Link to="/registration">Register</Link></MenuItemOption>
                        <MenuItemOption><Link to="/">Login</Link></MenuItemOption>
                        </MenuOptionGroup>
                        <MenuDivider />
                    <MenuOptionGroup defaultValue='asc' title="Settings">
                        <MenuItem icon={<SettingsIcon />}>
                            <Link to="/settings">Settings</Link>
                            </MenuItem>
                       </MenuOptionGroup>
                    </MenuList> 
                   
                </Menu>

                <li className='toggler'><Toggler /></li>

            
         
               
            </ul>
        </nav>
    )
}
export default Nav;