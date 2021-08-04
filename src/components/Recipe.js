import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
  const { category, imageUrl } = props;
  return (
    <>
      <div>
        <img src={imageUrl} alt={category} />
      </div>
      <Link to={`/${category}`}>{category}</Link>
    </>
  );
}
 
export default Recipe;