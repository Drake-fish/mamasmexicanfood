import React from 'react';
import {Link} from 'react-router';

import PhotoGallery from '../Components/PhotoGallery';
import Map from '../Components/map';
import images from '../images';
import Reviews from '../Components/reviews';
import Story from '../Components/story';
import Hours from '../Components/Hour';

export default React.createClass({
  render(){
    return(
      <div className="home">
        <PhotoGallery images={images}/>
        <h2>Home of the Soupy Tacos and Teamonaide</h2>
        <h3>Authentic<i className="fa fa-circle" aria-hidden="true"></i>Fresh<i className="fa fa-circle" aria-hidden="true"></i>Catering</h3>
        <div className="buttons">
            <Link to="menu"><button className="order">Menu</button></Link>
            <button className="order">Order</button>
        </div>

        <div className="break">
        </div>
        <Story/>
        <Hours/>
        <Map/>
        <Reviews/>
        <footer>
          <h3>Follow us on Facebook</h3>
        </footer>
      </div>
    );
  }
})
