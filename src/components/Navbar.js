import React from 'react';
import { Link } from 'react-router-dom';
import FilterRecipes from './FilterRecipes';
import SearchRecipe from './SearchRecipe';
import { Header, MenuList, LogoLink } from '../styles/styles';

const Navbar = () => {

  const onFilterRecipe = (categName) => {
    console.log(`Filtering Recipes by: ${categName} `)
  }

  return (
    <Header>
      <nav>
        <MenuList>
          <li><Link style={{fontSize: "2rem"}} to="/">Catalogue</Link></li>
          <li>
            Filter by category:
            <FilterRecipes onChange={onFilterRecipe} />
          </li>
          <li>
            <SearchRecipe />
          </li>
        </MenuList>
      </nav>
    </Header>
  );
};
 
export default Navbar;