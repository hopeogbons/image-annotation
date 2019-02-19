import axios from 'axios';

// fetch
export const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';
export const FETCH_IMAGE_RESET = 'FETCH_IMAGE_RESET';

const ROOT_URL = 'http://localhost:8000/api/v1';

export function fetchImageRequest() {
  const payload = axios({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'get',
    url: `${ROOT_URL}/images/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 200) {
        request.data = data;
      } else {
        request.error = 'Unable to fetch images at the moment. Please, try again later.';
      }
      return request
    })

  return {
    type: FETCH_IMAGE_REQUEST,
    payload: payload
  }
}
export function fetchImageSuccess(data) {
  const payload = { data: data };

  return {
    type: FETCH_IMAGE_SUCCESS,
    payload: payload
  };
}
export function fetchImageFailure(error) {
  const payload = { error: error };

  return {
    type: FETCH_IMAGE_FAILURE,
    payload: payload
  };
}
export function fetchImageReset() {
  return {
    type: FETCH_IMAGE_RESET
  };
}

