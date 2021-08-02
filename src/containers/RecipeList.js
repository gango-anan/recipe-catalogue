import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
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
 
export default RecipeList;