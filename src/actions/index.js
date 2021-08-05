import axios from 'axios';

export const fetchMeals = (mealCategory) => (dispatch) => {
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`)
    .then(({ data }) => {
      dispatch({ type: 'FETCH_MEALS', payload: data });
    });
};

export const fetchCategories = () => (dispatch) => {
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(({ data }) => {
      dispatch({ type: 'FETCH_CATEGORIES', payload: data });
    });
};

export const changeCategory = (categoryName) => ({
  type: 'CHANGE_CATEGORY', payload: categoryName,
});
