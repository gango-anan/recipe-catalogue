import React from 'react';
import FilterRecipes from './FilterRecipes';
import SearchRecipe from './SearchRecipe';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Catalogue</a></li>
        <li><a href="/recipes">Recipes</a></li>
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