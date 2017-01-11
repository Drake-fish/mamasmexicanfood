import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  render(){
    return(
            <header>
              <div className="top-liner">
                <h4>Authentic Fresh and Homemade Since 2007</h4>
              </div>
              <div className="logo">
                <img src="../../assets/images/mamaslogo.png"/>
                <Nav/>
              </div>
            </header>
    )
  }
})
