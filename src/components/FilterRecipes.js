import React from 'react';

const categories = [];

const FilterRecipes = () => {
  return (
    <div>
      <select name="categories" id="categories">
        <option value="All recipes">All recipes</option>
        {
          categories.map((category) => {
            <option key={category} value={category}>{category}</option>
          })
        }
      </select>
    </div>
  );
}
 
export default FilterRecipes;