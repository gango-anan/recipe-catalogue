import axios from 'axios';

const ApiKey = process.env.REACT_APP_SECRET_KEY;

export const fetchMeals = (mealCategory) => (dispatch) => {
  axios.get(`https://www.themealdb.com/api/json/v1/${ApiKey}/filter.php?c=${mealCategory}`)
    .then(({ data }) => {
      dispatch({ type: 'FETCH_MEALS', payload: data });
    });
};

export const fetchCategories = () => (dispatch) => {
  axios.get(`https://www.themealdb.com/api/json/v1/${ApiKey}/categories.php`)
    .then(({ data }) => {
      dispatch({ type: 'FETCH_CATEGORIES', payload: data });
    });
};

export const changeCategory = (categoryName) => ({
  type: 'CHANGE_CATEGORY', payload: categoryName,
});
