import React from 'react';
import PropTypes from 'prop-types';
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

Recipe.propTypes = {
  category: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Recipe;
