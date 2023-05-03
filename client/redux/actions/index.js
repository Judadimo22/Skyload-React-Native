import axios from 'axios'
export const GET_LOADS = 'GET_LOADS';
export const SEARCH = 'SEARCH';

export function getLoads() {
    return async function (dispatch) {
      let json = await axios.get('http://192.168.1.108:3001/loads');
      dispatch({
        type: GET_LOADS,
        payload: json.data,
      });
    };
  }

  export const setSearch = (payload) => {
    return async function (dispatch) {
      dispatch({
        type: SEARCH,
        payload,
        });
    };
  };