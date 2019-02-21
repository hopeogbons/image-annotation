import React, { Component } from 'react';
import Annotation from 'react-image-annotation';

export default class ImageView extends Component {
  componentWillMount() {
    const image_id = this.props.image.data.id;
    this.props.fetchAnnotations(image_id);
  }

  state = {
    annotation: {},
    annotations: [],
    type: "RECTANGLE"
  }

  onChange = (annotation) => {
    this.setState({ annotation });
  }

  onSubmit = (annotation) => {
    const image_id = this.props.image.data.id;
    this.props.createAnnotation(image_id, annotation);
    this.setState({ annotation: {} });
    setTimeout(this.props.fetchAnnotations.bind(null, image_id), 100);
  }

  buildAnnotations(annotations) {
    const collection = [];
    let len = annotations.data.length;
    while (len--) {
      let record = annotations.data[len];
      let note = record.details;
      collection.push({geometry: note.geometry, data: {id: record.id, ...note.data}});
    }
    return collection;
  }

  render() {
    const { data, error, loading } = this.props.image;

    if (loading) {
      return (
        <div className="container" style={{width: '1000px'}}>
          <h1>Images</h1><h3>Loading...</h3>
        </div>
      )
    } else if (error) {
      return (
        <div className="alert alert-danger">
          Error: {error}
        </div>
      )
    } else {
      return (
        <div>
          <div className="nav-scroller bg-white shadow-sm">
            <div className="container" style={{width: '1000px'}}>
              <div className="row py-2 px-3"><h4>{data.title}</h4></div>
            </div>
          </div>
          <main role="main">
            <div className="container" style={{width: '1000px'}}>
              <div className="row" style={{ margin: '30px 0' }}>
                <Annotation
                  src={'/static/images/' + data.file_path}
                  alt={data.title}
                  annotations={this.buildAnnotations(this.props.annotations)}
                  type={this.state.type}
                  value={this.state.annotation}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
                <a href="/" className='btn btn-info' style={{ marginTop: '15px' }}>Back</a>
              </div>
            </div>
          </main>
        </div>
      )
    }
  }
}
