import React from 'react';

import Header from '../Components/Header';

export default React.createClass({
  render(){
    return(
            <div id="app">
              <Header/>
              {this.props.children}
            </div>
          );
        }
});
