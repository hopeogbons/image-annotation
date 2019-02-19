import React, { Component } from 'react';

export default class ImageList extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  renderImages(images) {
    return images.map(img => {
      return (
        <div className="col-md-4 bg-white" key={img.id}>
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" src={'/static/images/' + img.file_path} alt={img.title} />
            <div className="card-body">
              <h4>{img.title}</h4>
              <h6>{img.desc}</h6>
              <p className="card-text"><span className="badge badge-pill badge-dark">{img.count_annotations}</span> Annotations</p>
              <div className="d-flex justify-content-between align-items-center row">
                <div className="btn-group col">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
                <span className="text-muted col">Channel <span className="badge badge-pill badge-warning">{img.id}</span></span>
              </div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    const { data, error, loading } = this.props.images;

    if (loading) {
      return (
        <div className="container">
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
            <div className="container">
              <div className="row py-2 px-3">
                <button className="btn btn-info btn-sm ml-auto">+ New Image</button>
              </div>
            </div>
          </div>
          <main role="main">
            <div className="container">
              <div className="row" style={{ margin: '50px 0 80px' }}>
                {this.renderImages(data)}
              </div>
            </div>
          </main>
        </div>
      )
    }
  }
}
