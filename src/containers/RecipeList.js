import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
import Recipe from '../components/Recipe';
import FilterRecipes from '../components/FilterRecipes'
import { RecipeContainer, LoadingContainer } from '../styles/styles';
import Waiting from '../components/Waiting';

const RecipeList = (props) => {
  useEffect(() =>{
    props.fetchCategories();
  }, [props]);
  const { categories } = props.categories;
  if (!categories) {
    return(
      <LoadingContainer>
        <Waiting />
      </LoadingContainer>
    )
  }
  return (
    <>
    <div>
      <FilterRecipes categories ={categories} />
    </div>
    <RecipeContainer>
      {
        categories.map((category) => {
          const { idCategory, strCategory, strCategoryThumb } = category
          return(
            <div key={idCategory}>
              <Recipe category={strCategory} imageUrl={strCategoryThumb} />
            </div>
          )
        })
      }
    </RecipeContainer>
    </>
   );
}
 
const mapStateToProps = (state) => {
  return {
    categories: state.recipes.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => { dispatch(fetchCategories()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);