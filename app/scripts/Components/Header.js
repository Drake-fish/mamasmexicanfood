import React from 'react';
import {Link} from 'react-router';

import Nav from './Nav';

export default React.createClass({
  render(){
    return(
            <header>
              <Nav/>
              <Link to="/"><div className="logo">
                <img src="../../assets/images/mamaslogo-small.png"/>
              </div></Link>
            </header>
    )
  }
})
