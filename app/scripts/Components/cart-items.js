import React from 'react';
import $ from 'jquery';
import store from '../store';
import CartItem from './cartItem';

export default React.createClass({
  getInitialState(){
    return{
      cart:store.cart.toJSON(),
      cartOpen:false,
      checkout:false
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
    if(this.state.cartOpen && !this.state.checkout){
      cart=(<div className="cart">
              <i className="fa fa-times" aria-hidden="true" onClick={this.closeCart}></i>
              {allCartItems}
              <div className="cart-total">
                <button onClick={this.openCheckout} className="checkout">Check out</button>
                <h4>Your Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
              </div>
            </div>)
    }else if(this.state.cartOpen && this.state.checkout){
      cart=(<div onClick={this.closeCheckout} className="checkout-form">
              <form onSubmit={this.checkout}>
                <input ref="name" type="text" placeholder="Name"/>
                <input ref="email" type="email" placeholder="Email"/>
                <input ref="phone" type="phone" placeholder="Phone Number"/>
                <h3>Estimated time of pick-up</h3>
                <input type="submit" value="CHECKOUT"/>
              </form>
            </div>
          );
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
  },
  openCheckout(){
    this.setState({checkout:true});
  },
  closeCheckout(){
    this.setState({checkout:false});
  },
  checkout(e){
    e.preventDefault();
    let items=JSON.stringify(this.state.cart.items);
    let name=this.refs.name.value;
    let email=this.refs.email.value;
    let phone=this.refs.phone.value;
    let total=Math.round(this.state.cart.total * 100)/100;

    $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/messaging/email',
        contentType: 'application/json',
        data: JSON.stringify({
            subject: "order " + name,
            bodyparts:{
              textmessage: "order: " +items + " " + phone + "Total:" + total
            },
            to:['drakefishatx@gmail.com']
        }),
        success:(response)=>{
          console.log('message-sent');

    }
});
}
});
