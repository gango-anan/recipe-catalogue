import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeWrapper, MoreDetailsButton } from '../styles/styles';

const Recipe = (props) => {
  const { category, imageUrl } = props;
  return (
    <RecipeWrapper>
      <h3 style={{ textAlign: 'center', margin: '0.5rem 0' }}>{category.toUpperCase()}</h3>
      <div>
        <img src={imageUrl} alt={category} />
      </div>
      <MoreDetailsButton type="button">
        <Link to={`/${category}`}>
          See
          {category}
          {' '}
          meals
        </Link>
      </MoreDetailsButton>
    </RecipeWrapper>
  );
};

export default Recipe;
