import axios from 'axios';

// create
export const CREATE_ANNOTATION_REQUEST = 'CREATE_ANNOTATION_REQUEST';
export const CREATE_ANNOTATION_SUCCESS = 'CREATE_ANNOTATION_SUCCESS';
export const CREATE_ANNOTATION_FAILURE = 'CREATE_ANNOTATION_FAILURE';
export const CREATE_ANNOTATION_RESET = 'CREATE_ANNOTATION_RESET';

// fetch
export const FETCH_ANNOTATION_REQUEST = 'FETCH_ANNOTATION_REQUEST';
export const FETCH_ANNOTATION_SUCCESS = 'FETCH_ANNOTATION_SUCCESS';
export const FETCH_ANNOTATION_FAILURE = 'FETCH_ANNOTATION_FAILURE';
export const FETCH_ANNOTATION_RESET = 'FETCH_ANNOTATION_RESET';

const ROOT_URL = 'http://localhost:8000/api/v1';

export function createAnnotationRequest() {
  const payload = axios({
    method: 'get',
    url: `${ROOT_URL}/annotations/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 200) {
        request.data = data;
      } else {
        request.error = 'Unable to create annotations at the moment. Please, try again later.';
      }
      return request
    })

  return {
    type: CREATE_ANNOTATION_REQUEST,
    payload: payload
  }
}
export function createAnnotationSuccess(data) {
  const payload = { data: data };

  return {
    type: CREATE_ANNOTATION_SUCCESS,
    payload: payload
  };
}
export function createAnnotationFailure(error) {
  const payload = { error: error };

  return {
    type: CREATE_ANNOTATION_FAILURE,
    payload: payload
  };
}
export function createAnnotationReset() {
  return {
    type: CREATE_ANNOTATION_RESET
  };
}

export function fetchAnnotationRequest() {
  const payload = axios({
    method: 'get',
    url: `${ROOT_URL}/images/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 200) {
        request.data = data;
      } else {
        request.error = 'Unable to fetch annotations at the moment. Please, try again later.';
      }
      return request
    })

  return {
    type: FETCH_ANNOTATION_REQUEST,
    payload: payload
  }
}
export function fetchAnnotationSuccess(data) {
  const payload = { data: data };

  return {
    type: FETCH_ANNOTATION_SUCCESS,
    payload: payload
  };
}
export function fetchAnnotationFailure(error) {
  const payload = { error: error };

  return {
    type: FETCH_ANNOTATION_FAILURE,
    payload: payload
  };
}
export function fetchAnnotationReset() {
  return {
    type: FETCH_ANNOTATION_RESET
  };
}
