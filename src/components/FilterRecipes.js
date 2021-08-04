import React from 'react';
import { connect } from 'react-redux';

const FilterRecipes = (props) => {
  const { categories } = props.categories

  const handleFilterChange = (event) => {
    props.onChange(event.target.value)
  };

  if (!categories) {
    return(<div />)
  }
  return (
    <div>
      <select name="categories" id="categories" onChange={handleFilterChange}>
        <option value="All recipes">All recipes</option>
        {
          categories.map((category) =>(
            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
          ))
        }
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.recipes.categories,
    meals: state.recipes.meals
  }
}
 
export default connect(mapStateToProps)(FilterRecipes);