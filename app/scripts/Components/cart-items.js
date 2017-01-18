import React from 'react';

import store from '../store';
import CartItem from './cartItem';

export default React.createClass({
  getInitialState(){
    return{
      cart:store.cart.toJSON(),
      cartOpen:false
    };
  },
  componentDidMount(){
    store.cart.on('change update',()=>{
      this.setState({cart:store.cart.toJSON()
      });
    });
  },
  render(){
    let allCartItems=this.state.cart.items.map((item,i,arr)=>{
      return(
            <CartItem key={i} item={item}/>
      );
    });
    let cart=<div onClick={this.openCart} className="total">
                <h4>Your Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
            </div>
    if(this.state.cartOpen){
      cart=(<div className="cart">
              <i className="fa fa-times" aria-hidden="true" onClick={this.closeCart}></i>
              {allCartItems}
              <div className="cart-total">
                <h4>Your Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
              </div>
            </div>)
    }

    return(<div className="cart-container">
            {cart}
          </div>
        );
  },
  openCart(){
    this.setState({cartOpen:true});
  },
  closeCart(){
    this.setState({cartOpen:false});
  }
})
