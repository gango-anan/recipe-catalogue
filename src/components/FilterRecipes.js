import React from 'react';
import { connect } from 'react-redux';

const FilterRecipes = (props) => {
  const { categories } = props.categories
  if (!categories) {
    return(<div />)
  }
  return (
    <div>
      <select name="categories" id="categories" onChange={(e) => console.log(e.target.value)}>
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
    categories: state.recipes.categories
  }
}
 
export default connect(mapStateToProps)(FilterRecipes);