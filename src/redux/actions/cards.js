import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCards = (sortBy, category) => (dispatch) => {
  console.log(sortBy, category);
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios.get(`/cards?${
    category !== null ? `category=${category}` : ''
  }&_sort=${sortBy.type}&_order=${sortBy.order}`,
  ).then(({ data }) => {
    dispatch(setCards(data));
  });
};

export const setCards = (items) => ({
  type: 'SET_CARDS',
  payload: items,
});
