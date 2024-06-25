import React from 'react';
import Logo from '../../assets/pokeball-white.png';
import { Link } from 'react-router-dom';
import { List, ListItem, Flex, Text, Image, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import './Nav.css';
import Toggler from './Toggler/Toggler';

function Nav() {
    return (
        <nav className="navigation">
            <Image src={Logo} alt="Pokeball" className="logo" />
            <List className="nav">
                <ListItem>
                    <Link to="/" className="nav-link">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/pokedex" className="nav-link">Pokedex</Link>
                </ListItem>
                <ListItem>
                    <Link to="/settings" className="nav-link">Settings</Link>
                    <Menu className="menu">
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Account Settings
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </ListItem>
            </List>
            <Toggler />
        </nav>
    );
}

export default Nav;
