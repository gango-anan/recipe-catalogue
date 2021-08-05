import React from 'react';
import { Link } from 'react-router-dom';
import SearchRecipe from './SearchRecipe';
import { Header, MenuList } from '../styles/styles';

const Navbar = () => {
  return (
    <Header>
      <nav>
        <MenuList>
          <li><Link style={{fontSize: "2rem"}} to="/">Catalogue</Link></li>
          <li>
            <SearchRecipe />
          </li>
        </MenuList>
      </nav>
    </Header>
  );
};
 
export default Navbar;