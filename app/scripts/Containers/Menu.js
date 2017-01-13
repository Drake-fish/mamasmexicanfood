import React from 'react';

import menuData from '../menuData';
import MenuItems from '../Components/MenuItems';

export default React.createClass({
  render(){
    const appetizers=menuData.appetizers;
    const houseSpecials=menuData.houseSpecials;
    const tacos=menuData.tacos;
    return(
          <div className="menu-container">
            <MenuItems data={appetizers}/>
            <MenuItems data={houseSpecials}/>
            <MenuItems data={tacos}/>
          </div>
    );
  }
});
