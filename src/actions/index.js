import axios from 'axios';

export const fetchMeals = () => {
  return (dispatch) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(({ data }) => {
        dispatch({ type: 'FETCH_MEALS', payload: data })
      })
  }
};
