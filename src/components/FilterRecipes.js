import React from 'react';
import PropTypes from 'prop-types';
import { FilterSelector, FilterContainer } from '../styles/styles';

const FilterRecipes = ({ categories, onChange }) => (
  <FilterContainer>
    Filter by category:
    <FilterSelector name="categories" id="categories" onChange={(e) => onChange(e.target.value)}>
      <option value="All recipes">All recipes</option>
      {
          categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))
        }
    </FilterSelector>
  </FilterContainer>
);

FilterRecipes.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default FilterRecipes;
