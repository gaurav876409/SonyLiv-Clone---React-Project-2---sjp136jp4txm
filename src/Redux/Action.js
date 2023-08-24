import axios from 'axios';
export const FETCH_SHOW_DETAILS_SUCCESS = 'FETCH_SHOW_DETAILS_SUCCESS';
export const FETCH_SHOW_DETAILS_FAILURE = 'FETCH_SHOW_DETAILS_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_PASSWORD_FAILURE = 'UPDATE_PASSWORD_FAILURE';
export const LOGOUT = 'LOGOUT';
export const ADD_WATCHLIST_SUCCESS = 'ADD_WATCHLIST_SUCCESS';
export const ADD_WATCHLIST_FAILURE = 'ADD_WATCHLIST_FAILURE';
export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCCESS';
export const REMOVE_WATCHLIST_FAILURE = 'REMOVE_WATCHLIST_FAILURE';

export const fetchShowDetails =  async(dispatch, projectId) => {
  try {
    const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/show', {
      headers: {
        projectId: projectId,
      }
    });

    dispatch({
      type: 'FETCH_SHOW_DETAILS_SUCCESS', 
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_SHOW_DETAILS_FAILURE', 
      payload: error,
    });
  }
};

export const signup = (name, email, password) => async dispatch => {
  try {
    const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', {
      name,
      email,
      password,
      appType: 'ott',
    }, {
      headers: {
        projectId: 'sjp136jp4txm',
      },
    });

    dispatch({
      type: 'SIGNUP_SUCCESS', 
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'SIGNUP_FAILURE', 
      payload: error,
    });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login', {
      email,
      password,
      appType: 'ott',
    }, {
      headers: {
        projectId: 'sjp136jp4txm',
      },
    });

    dispatch({
      type: 'LOGIN_SUCCESS', 
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE', 
      payload: error,
    });
  }
};

export const updatePassword = (name, email, passwordCurrent, newPassword) => async dispatch => {
  try {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser.token;
    const response = await axios.patch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
      name,
      email,
      passwordCurrent,
      password: newPassword,
      appType: 'ott',
    }, {
      headers: {
        projectId: 'sjp136jp4txm',
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: 'UPDATE_PASSWORD_SUCCESS', 
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'UPDATE_PASSWORD_FAILURE', 
      payload: error,
    });
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const addToWatchlist = (showId) => async (dispatch) => {
  console.log("line 121", showId)
  try {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser.token;
    console.log("line 124", token)

    const response = await axios.patch(
      `https://academics.newtonschool.co/api/v1/social_media/watchlist/${showId}`,
      { showId }, // Pass the showId in the request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: 'sjp136jp4txm',
        },
      }
    );
    console.log("line 137", response.data)
    if(response){
      dispatch({
        type: 'ADD_WATCHLIST_SUCCESS',
        payload: response.data,
      });
    }
  } catch (error) {
    console.log("error", error)
    dispatch({
      type: 'ADD_WATCHLIST_FAILURE',
      payload: error,
    });
  }
};

export const removeFromWatchlist = (showId) => async (dispatch) => {
  try {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser.token;

    const response = await axios.patch(
      `https://academics.newtonschool.co/api/v1/social_media/watchlist/${showId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: 'sjp136jp4txm',
        },
      }
    );

    dispatch({
      type: 'REMOVE_WATCHLIST_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'REMOVE_WATCHLIST_FAILURE',
      payload: error,
    });
  }
};







