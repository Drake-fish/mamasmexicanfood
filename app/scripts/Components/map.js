import React from 'react';

export default React.createClass({
  render(){
    let url=`https://www.google.com/maps/embed/v1/place?q=1461%20Lee%20Trevino%20El%20Paso,%20tx&key=AIzaSyDi7Dus0sr6U1ZjH_ixNtWF8fV2reeFDn0`
    let map=(<iframe className="google-map" src={url}></iframe>);
    return(
      <div className="story-box">
      <div className="info-break">
      </div>
      <h4 className="info-title">JOIN US!</h4>
      {map}
      <h4 className="info">1461 Lee Trevino #301 El Paso, Texas</h4>
      <span className="directions">Get Directions</span>
      </div>
    );
  }
});
