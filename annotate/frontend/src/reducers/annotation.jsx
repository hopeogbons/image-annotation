import {
  CREATE_ANNOTATION_REQUEST, CREATE_ANNOTATION_SUCCESS, CREATE_ANNOTATION_FAILURE, CREATE_ANNOTATION_RESET,
  FETCH_ANNOTATION_REQUEST, FETCH_ANNOTATION_SUCCESS, FETCH_ANNOTATION_FAILURE, FETCH_ANNOTATION_RESET
} from '../actions/annotations';

const INITIAL_STATE = {
  createdAnnotation: { data: null, error: null, loading: false },
  fetchedAnnotation: { data: [], error: null, loading: false },
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // create
    case CREATE_ANNOTATION_REQUEST:
      return { ...state, createdAnnotation: { ...INITIAL_STATE.createdAnnotation, ...action.payload } };
    case CREATE_ANNOTATION_SUCCESS:
      return { ...state, createdAnnotation: { ...INITIAL_STATE.createdAnnotation, ...action.payload } };
    case CREATE_ANNOTATION_FAILURE:
      return { ...state, createdAnnotation: { ...INITIAL_STATE.createdAnnotation, ...action.payload } };
    case CREATE_ANNOTATION_RESET:
      return { ...state, createdAnnotation: { ...INITIAL_STATE.createdAnnotation } };

    // fetch
    case FETCH_ANNOTATION_REQUEST:
      return { ...state, fetchedAnnotation: { ...INITIAL_STATE.fetchedAnnotation, ...action.payload } };
    case FETCH_ANNOTATION_SUCCESS:
      return { ...state, fetchedAnnotation: { ...INITIAL_STATE.fetchedAnnotation, ...action.payload } };
    case FETCH_ANNOTATION_FAILURE:
      return { ...state, fetchedAnnotation: { ...INITIAL_STATE.fetchedAnnotation, ...action.payload } };
    case FETCH_ANNOTATION_RESET:
      return { ...state, fetchedAnnotation: { ...INITIAL_STATE.fetchedAnnotation } };

    default:
      return state;
  }
}
