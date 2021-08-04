import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
import Recipe from '../components/Recipe';
import { RecipeContainer } from '../styles/styles';

const RecipeList = (props) => {
  useEffect(() =>{
    props.fetchCategories();
  }, [props]);
  const { categories } = props.categories;
  if (!categories) {
    return (
      <div>
        Loading.....
      </div>
    )
  }
  return ( 
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