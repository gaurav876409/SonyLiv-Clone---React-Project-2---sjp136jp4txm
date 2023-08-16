// actions.js
import axios from 'axios';

export const FETCH_SHOW_DETAILS_SUCCESS = 'FETCH_SHOW_DETAILS_SUCCESS';
export const FETCH_SHOW_DETAILS_FAILURE = 'FETCH_SHOW_DETAILS_FAILURE';

export const fetchShowDetails = (projectId) => {
  return dispatch => {
    axios.get('https://academics.newtonschool.co/api/v1/ott/show', {
      headers: {
        projectId: projectId,
      }
    })
    .then(response => {
      dispatch(fetchShowDetailsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchShowDetailsFailure(error));
    });
  };
};

export const fetchShowDetailsSuccess = showDetails => ({
  type: FETCH_SHOW_DETAILS_SUCCESS,
  payload: showDetails,
});

export const fetchShowDetailsFailure = error => ({
  type: FETCH_SHOW_DETAILS_FAILURE,
  payload: error,
});
