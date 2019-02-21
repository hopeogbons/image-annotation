import React, { Component } from 'react';

export default class ImageList extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  renderImages(images) {
    return images.map(img => {
      return (
        <div className="col-md-4 bg-white" key={img.id}>
          <div className="card mb-4 shadow-sm" onClick={this.props.viewImage.bind(null, img.id)} style={{cursor: 'pointer'}}>
            <img className="card-img-top" src={'/static/images/' + img.file_path} alt={img.title} />
            <div className="card-body">
              <h4>{img.title}</h4>
              <h6>{img.desc}</h6>
              <p className="card-text"><span className="badge badge-pill badge-dark">{img.count_annotations}</span> Annotations</p>
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
              <div className="row py-2 px-3"><h4>A List of Beer Bottles</h4></div>
            </div>
          </div>
          <main role="main">
            <div className="container" style={{width: '1000px'}}>
              <div className="row" style={{ margin: '30px 0' }}>
                {this.renderImages(data)}
              </div>
            </div>
          </main>
        </div>
      )
    }
  }
}
