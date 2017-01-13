import React from 'react';

import menuData from '../menuData';
import MenuItems from '../Components/MenuItems';

export default React.createClass({
  render(){
    const appetizers=menuData.appetizers;
    return(
          <div className="menu-container">
            <MenuItems data={appetizers}/>
          </div>
    );
  }
});
