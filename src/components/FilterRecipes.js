import React from 'react';
import { FilterSelector, FilterContainer } from '../styles/styles';

const FilterRecipes = ({ categories }) => {

  return (
    <FilterContainer>
      Filter by category:
      <FilterSelector name="categories" id="categories">
        <option value="All recipes">All recipes</option>
        {
          categories.map((category) =>(
            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
          ))
        }
      </FilterSelector>
    </FilterContainer>
  );
}

export default FilterRecipes;