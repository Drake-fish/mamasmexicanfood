import React from 'react';

import PhotoGallery from '../Components/PhotoGallery';
import Map from '../Components/map';
import images from '../images';
import Reviews from '../Components/reviews';
export default React.createClass({
  render(){
    return(
      <div className="home">
        <PhotoGallery images={images}/>
        <h2>Home of the Soupy Tacos and Teamonaide</h2>
        <h3>Authentic<i className="fa fa-circle" aria-hidden="true"></i>Fresh<i className="fa fa-circle" aria-hidden="true"></i>Catering</h3>
        <button className="order">Order Online</button>
        <div className="break">
        </div>
        <Map/>
        <Reviews/>
      </div>
    );
  }
})
