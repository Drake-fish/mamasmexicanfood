import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  render(){
    return(
            <header>
              <div className="top-liner">
              <Nav/>
              </div>
              <Link to="/"><div className="logo">
                <img src="../../assets/images/mamaslogo-small.png"/>
              </div></Link>
            </header>
    )
  }
})
