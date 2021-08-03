import axios from 'axios';
const api_key = process.env.REACT_APP_SECRET_KEY;

export const fetchMeals = () => {
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${api_key}/filter.php?c=Seafood`)
      .then(({ data }) => {
        dispatch({ type: 'FETCH_MEALS', payload: data })
      })
  }
};

export const fetchCategories = () => {
  return (dispatch) => {
    axios.get(`https://www.themealdb.com/api/json/v1/${api_key}/categories.php`)
      .then(({ data }) => {
        dispatch({ type: 'FETCH_CATEGORIES', payload: data })
      })
  }
};
