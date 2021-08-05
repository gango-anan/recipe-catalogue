import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, changeCategory } from '../actions/index';
import Recipe from '../components/Recipe';
import FilterRecipes from '../components/FilterRecipes';
import { RecipeContainer, LoadingContainer } from '../styles/styles';
import Waiting from '../components/Waiting';

const RecipeList = (props) => {
  useEffect(() => {
    props.fetchCategories();
  }, [props]);

  const { changeCategory, filters } = props;
  const { categories } = props.categories;
  const handleSelectChange = (filters) => {
    changeCategory(filters);
  };

  const filteredCategories = () => {
    if (filters === 'All recipes') {
      return categories;
    }

    return categories.filter((category) => category.strCategory === filters);
  };

  if (!categories) {
    return (
      <LoadingContainer>
        <Waiting />
      </LoadingContainer>
    );
  }
  return (
    <>
      <div>
        <FilterRecipes categories={categories} onChange={handleSelectChange} />
      </div>
      <RecipeContainer>
        {
        filteredCategories().map((category) => {
          const { idCategory, strCategory, strCategoryThumb } = category;
          return (
            <div key={idCategory}>
              <Recipe category={strCategory} imageUrl={strCategoryThumb} />
            </div>
          );
        })
      }
      </RecipeContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.recipes.categories,
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => { dispatch(fetchCategories()); },
  changeCategory: (name) => { dispatch(changeCategory(name)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
