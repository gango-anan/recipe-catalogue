import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const RecipeList = ({ categories }) => {
  return ( 
    <div>
      {
        categories.map((category) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = category
          return(
            <div key={idCategory}>
              <div>
                <img src={strCategoryThumb} alt={strCategory} />
              </div>
              <Link to={`/${strCategory}`}>{strCategory}</Link>
              <p>{ strCategoryDescription }</p>
            </div>
          )
        })
      }
    </div>
   );
}
 
const mapStateToProps = (state) => {
  return {
    categories: state.recipes.categories
  }
}

export default connect(mapStateToProps)(RecipeList);