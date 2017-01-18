import React from 'react';

import menuData from '../menuData';
import MenuItems from '../Components/MenuItems';
import CartItems from '../Components/cart-items';
export default React.createClass({
  render(){
    const appetizers=menuData.appetizers;
    const houseSpecials=menuData.houseSpecials;
    const tacos=menuData.tacos;
    const enchiladas=menuData.enchiladas;
    const soupys=menuData.soupyTacos;
    const soups=menuData.soups;
    const seafood=menuData.seafood;
    const sides=menuData.sides;
    const beverages=menuData.beverages;
    const desserts=menuData.desserts;
    return(
          <div className="menu-container">
            <MenuItems data={appetizers}/>
            <MenuItems data={houseSpecials}/>
            <MenuItems data={tacos}/>
            <MenuItems data={enchiladas}/>
            <MenuItems data={soupys}/>
            <MenuItems data={soups}/>
            <MenuItems data={seafood}/>
            <MenuItems data={sides}/>
            <MenuItems data={beverages}/>
            <MenuItems data={desserts}/>
            <CartItems/>
          </div>
    );
  }
});
