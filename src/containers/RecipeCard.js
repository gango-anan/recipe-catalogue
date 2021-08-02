import React, { Component } from 'react';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { recipeName: '' };
  }

  componentDidMount() {
    let recipeName = this.props.match.params.recipeName;
    this.setState({ recipeName });
  }

  render() {
    const { recipeName } = this.state;
    return ( 
      <div>
        <h3>{ recipeName }</h3>
      </div>
     );
  }
}
 
export default RecipeCard;
