import React from 'react';

import store from '../store';

export default React.createClass({

  render(){
    let toppings;
    if(this.props.item.toppings){
    toppings=this.props.item.toppings.map((topping,i,arr)=>{
      return <h4>{topping}</h4>
    });
  }
    console.log(this.props);
  return(
        <li>
          <h3>{this.props.item.name}<span>{this.props.item.price}</span></h3>
          {toppings}
          <button onClick={this.removeItem}>Remove</button>
        </li>
  );
},
removeItem(){
  store.cart.removeItem(this.props.item);
  store.cart.getTotal();
}
});
