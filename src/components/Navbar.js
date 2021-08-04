import React from 'react';
import { Link } from 'react-router-dom';
import FilterRecipes from './FilterRecipes';
import SearchRecipe from './SearchRecipe';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Catalogue</Link></li>
        <li>
          Filter by category:
          <FilterRecipes />
        </li>
        <li>
          <SearchRecipe />
        </li>
      </ul>
    </nav>
  );
};
 
export default Navbar;