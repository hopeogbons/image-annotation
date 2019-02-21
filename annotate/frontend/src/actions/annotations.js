import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

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

export function createAnnotationRequest(image_id, annotation) {
  const {geometry, data} = annotation;
  const json_data = {image: image_id, details: {geometry, data}};

  const payload = axios({
    method: 'post',
    data: json_data,
    url: `${ROOT_URL}/annotations/`
  })
    .then(res => {
      const request = { loading: true };
      const {data, status} = res;
      if (data && status === 201) {
        request.data = data;
      } else {
        request.error = 'Unable to create annotation at the moment. Please, try again later.';
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

export function fetchAnnotationRequest(image_id) {
  const payload = axios({
    method: 'get',
    url: `${ROOT_URL}/annotations/?image=${image_id}`
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
