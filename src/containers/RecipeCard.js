import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   let recipeName = this.props.match.params.recipeName;
  //   this.setState({ recipeName });
  // }

  render() {
    //const { recipeName } = this.state;
    const { strCategory, strCategoryThumb, strCategoryDescription } = this.props.recipe;
    return ( 
      <div>
        <h3>{ strCategory }</h3>
        <div>
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <p>{ strCategoryDescription }</p>
      </div>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  let recipeName = ownProps.match.params.recipeName;
  return {
    recipe: state.recipes.categories.find((recipe) => recipe.strCategory === recipeName)
  }
};
 
export default connect(mapStateToProps)(RecipeCard);
