import { connect } from 'react-redux';
import ImageList from '../components/ImageList';
import { push } from 'connected-react-router';
import {
  fetchImageRequest, fetchImageSuccess, fetchImageFailure, fetchImageReset,
  viewImageRequest, viewImageSuccess, viewImageFailure, viewImageReset
} from '../actions/images';

function mapStateToProps(state) {
  return {
    images: state.image.fetchedImage
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => {
      dispatch(fetchImageRequest())
      .then(res => {
        const { data, error } = res.payload;
        if (data) {
          dispatch(fetchImageSuccess(data));
          dispatch(push('/'));
        } else {
          dispatch(fetchImageFailure(error));
          dispatch(fetchImageReset());
        }
      })
      .catch(error => {
        dispatch(fetchImageFailure(error));
        dispatch(fetchImageReset());
      });
    },

    viewImage: (id) => {
      dispatch(viewImageRequest(id))
      .then(res => {
        const { data, error } = res.payload;
        if (data) {
          const { id } = data;
          dispatch(viewImageSuccess(data));
          dispatch(push(`/images/annotate/${id}`));
        } else {
          dispatch(viewImageFailure(error));
          dispatch(viewImageReset());
        }
      })
      .catch(error => {
        dispatch(viewImageFailure(error));
        dispatch(viewImageReset());
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
