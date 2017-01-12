import React from 'react';

import PhotoGallery from './PhotoGallery';
import reviews from '../reviewData';

export default React.createClass({
  render(){
    return(
      <div className="map">
      <div className="info-break">
      </div>
      <h4 className="info-title">People Love Us!</h4>
      <PhotoGallery images={reviews}/>
      <h4 className="info">Check us out on Yelp!</h4>
      <span className="directions">Read More</span>
      </div>
    );
  }
});
