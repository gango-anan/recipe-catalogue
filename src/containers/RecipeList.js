import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';

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
  else {
    return ( 
      <div>
        {
          categories.map((category) => {
            const { idCategory, strCategory, strCategoryThumb } = category
            return(
              <div key={idCategory}>
                <div>
                  <img src={strCategoryThumb} alt={strCategory} />
                </div>
                <Link to={`/${strCategory}`}>{strCategory}</Link>
              </div>
            )
          })
        }
      </div>
     );
  }
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