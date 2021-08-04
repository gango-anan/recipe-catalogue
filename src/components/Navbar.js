import React from 'react';
import { Link } from 'react-router-dom';
import FilterRecipes from './FilterRecipes';
import SearchRecipe from './SearchRecipe';

const Navbar = () => {

  const onFilterRecipe = (categName) => {
    console.log(`Filtering Recipes by: ${categName} `)
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Catalogue</Link></li>
        <li>
          Filter by category:
          <FilterRecipes onChange={onFilterRecipe} />
        </li>
        <li>
          <SearchRecipe />
        </li>
      </ul>
    </nav>
  );
};
 
export default Navbar;