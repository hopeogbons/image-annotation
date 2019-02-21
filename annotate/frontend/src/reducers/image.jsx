import {
  FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE, FETCH_IMAGE_RESET,
  VIEW_IMAGE_REQUEST, VIEW_IMAGE_SUCCESS, VIEW_IMAGE_FAILURE, VIEW_IMAGE_RESET
} from '../actions/images';

const INITIAL_STATE = {
  fetchedImage: { data: [], error: null, loading: false },
  viewedImage: { data: null, error: null, loading: false },
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // fetch
    case FETCH_IMAGE_REQUEST:
      return { ...state, fetchedImage: { ...INITIAL_STATE.fetchedImage, ...action.payload } };
    case FETCH_IMAGE_SUCCESS:
      return { ...state, fetchedImage: { ...INITIAL_STATE.fetchedImage, ...action.payload } };
    case FETCH_IMAGE_FAILURE:
      return { ...state, fetchedImage: { ...INITIAL_STATE.fetchedImage, ...action.payload } };
    case FETCH_IMAGE_RESET:
      return { ...state, fetchedImage: { ...INITIAL_STATE.fetchedImage } };

    // view
    case VIEW_IMAGE_REQUEST:
      return { ...state, viewedImage: { ...INITIAL_STATE.viewedImage, ...action.payload } };
    case VIEW_IMAGE_SUCCESS:
      return { ...state, viewedImage: { ...INITIAL_STATE.viewedImage, ...action.payload } };
    case VIEW_IMAGE_FAILURE:
      return { ...state, viewedImage: { ...INITIAL_STATE.viewedImage, ...action.payload } };
    case VIEW_IMAGE_RESET:
      return { ...state, viewedImage: { ...INITIAL_STATE.viewedImage } };

    default:
      return state;
  }
}
