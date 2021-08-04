import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions/index';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { strCategory } = this.props.recipe;
    this.props.fetchMeals(strCategory);
  }

  render() {
    const { strCategory } = this.props.recipe;
    const { meals } = this.props.meals;
    if (!meals) {
      return (
        <div>
          <span>Loading.....</span>
        </div>
      )
    }
    return ( 
      <div>
        <h2>{ strCategory }</h2>
        <>
          {
            meals.map((meal) => {
              const { idMeal, strMeal, strMealThumb } = meal;
              return(
                <div key={ idMeal }>
                  <div>
                    <img src={strMealThumb} alt={strMeal} />
                  </div>
                  <h3>{ strMeal }</h3>
                </div>
              )
            })
          }
        </>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let recipeName = ownProps.match.params.recipeName;
  return {
    recipe: state.recipes.categories.categories.find((recipe) => recipe.strCategory === recipeName),
    meals: state.recipes.meals
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeals: (mealCategory) => { dispatch(fetchMeals(mealCategory)) }
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);
