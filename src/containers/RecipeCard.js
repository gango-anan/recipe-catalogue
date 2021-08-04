import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions/index';
import { MealsContainer, MealsImage } from '../styles/styles';

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
      <div style={{paddingBlock: 'min(5vh, 10rem)'}}>
        <h2 style={{margin: '1rem'}}>{ strCategory }</h2>
        <MealsContainer>
          {
            meals.map((meal) => {
              const { idMeal, strMeal, strMealThumb } = meal;
              return(
                <div style={{margin: '1rem', padding: '0.5rem', textOverFlow: 'ellipsis'}} key={ idMeal }>
                  <div>
                    <MealsImage src={strMealThumb} alt={strMeal} />
                  </div>
                  <p>{ strMeal }</p>
                </div>
              )
            })
          }
        </MealsContainer>
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
