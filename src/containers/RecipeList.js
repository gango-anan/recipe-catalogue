import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const RecipeList = (props) => {
  console.log(props.categories);
  return ( 
    <div>
      <div>
        <Link to="/chicken">Chicken</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae voluptatum ducimus et voluptatem quos molestias ab laboriosam eveniet blanditiis magni nulla praesentium voluptate saepe quaerat, optio non. Obcaecati, accusamus?</p>
      </div>
      <div>
        <Link to="/pork">Pork</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae voluptatum ducimus et voluptatem quos molestias ab laboriosam eveniet blanditiis magni nulla praesentium voluptate saepe quaerat, optio non. Obcaecati, accusamus?</p>
      </div>
      <div>
        <Link to="/seafood">Sea food</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae voluptatum ducimus et voluptatem quos molestias ab laboriosam eveniet blanditiis magni nulla praesentium voluptate saepe quaerat, optio non. Obcaecati, accusamus?</p>
      </div>
    </div>
   );
}
 
const mapStateToProps = (state) => {
  return {
    categories: state.recipes.categories
  }
}

export default connect(mapStateToProps)(RecipeList);