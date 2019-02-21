import { connect } from 'react-redux';
import ImageView from '../components/ImageView';
import {
  fetchAnnotationRequest, fetchAnnotationSuccess, fetchAnnotationFailure, fetchAnnotationReset,
  createAnnotationRequest, createAnnotationSuccess, createAnnotationFailure, createAnnotationReset
} from "../actions/annotations";

function mapStateToProps(state) {
  return {
    image: state.image.viewedImage,
    annotations: state.annotation.fetchedAnnotation
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnnotations: (image_id) => {
      dispatch(fetchAnnotationRequest(image_id))
      .then(res => {
        const { data, error } = res.payload;
        if (data) {
          dispatch(fetchAnnotationSuccess(data));
        } else {
          dispatch(fetchAnnotationFailure(error));
          dispatch(fetchAnnotationReset());
        }
      })
      .catch(error => {
        dispatch(fetchAnnotationFailure(error));
        dispatch(fetchAnnotationReset());
      });
    },
    createAnnotation: (image_id, annotation) => {
      dispatch(createAnnotationRequest(image_id, annotation))
      .then(res => {
        const { data, error } = res.payload;
        if (data) {
          dispatch(createAnnotationSuccess(data));
        } else {
          dispatch(createAnnotationFailure(error));
          dispatch(createAnnotationReset());
        }
      })
      .catch(error => {
        dispatch(createAnnotationFailure(error));
        dispatch(createAnnotationReset());
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageView);
