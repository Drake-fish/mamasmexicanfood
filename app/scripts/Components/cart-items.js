import React from 'react';
import $ from 'jquery';
import store from '../store';
import CartItem from './cartItem';

import moment from 'moment';

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
    let cart=(<div className="total">
                <h4 className="total-bottom" onClick={this.toggleCart}>Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
                <div className="cart">
                        <i className="fa fa-times" aria-hidden="true" onClick={this.toggleCart}></i>
                        {allCartItems}
                        <div className="cart-total">
                          <button onClick={this.toggleCheckout} className="checkout">Check out</button>
                          <h4>Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
                        </div>
                      </div>
                      <div onClick={this.toggleCheckout} className="checkout-form"></div>
                        <form className="form" onSubmit={this.checkout}>
                          <input ref="name" type="text" placeholder="Name"/>
                          <input ref="email" type="email" placeholder="Email"/>
                          <input ref="phone" type="phone" placeholder="Phone Number"/>
                          <h3>Estimated time of pick-up</h3>
                          <input type="submit" value="CHECKOUT"/>
                        </form>

                </div>
              );
    if(this.state.cartOpen && !this.state.checkout){
      cart=(<div className="total total-hide">
                  <h4 className="total-top">Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
                  <div className="cart cart-active">
                          <i className="fa fa-times" aria-hidden="true" onClick={this.toggleCart}></i>
                          {allCartItems}
                          <div className="cart-total">
                            <button onClick={this.toggleCheckout} className="checkout">Check out</button>
                            <h4>Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
                          </div>
                        </div>
                        <div onClick={this.toggleCheckout} className="checkout-form"></div>
                          <form className="form" onSubmit={this.checkout}>
                            <input ref="name" type="text" placeholder="Name"/>
                            <input ref="email" type="email" placeholder="Email"/>
                            <input ref="phone" type="phone" placeholder="Phone Number"/>
                            <h3>Estimated time of pick-up</h3>
                            <input type="submit" value="CHECKOUT"/>
                          </form>

                  </div>
                );
    }else if(!this.state.cartOpen && this.state.checkout){
      let date=moment().add(15,'minutes').calendar();
      cart=(
              <div className="total total-hide">
                          <h4 className="total-top">Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
                          <div className="cart">
                                  <i className="fa fa-times" aria-hidden="true" onClick={this.toggleCart}></i>
                                  {allCartItems}
                                  <div className="cart-total">
                                    <button onClick={this.toggleCart} className="checkout">Check out</button>
                                    <h4>Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
                                  </div>
                                </div>
                                <div onClick={this.toggleCheckout} className="checkout-form checkout-open"></div>
                                  <form className="form form-open" onSubmit={this.checkout}>
                                    <input ref="name" type="text" placeholder="Name"/>
                                    <input ref="email" type="email" placeholder="Email"/>
                                    <input ref="phone" type="phone" placeholder="Phone Number"/>
                                    <h3>Estimated time of pick-up: {date}</h3>
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
toggleCart(){
  this.setState({cartOpen:!this.state.cartOpen})
},
toggleCheckout(){
  this.setState({cartOpen:false, checkout:!this.state.checkout});
},
  checkout(e){
    e.preventDefault();
    let items=JSON.stringify(this.state.cart.items);
    let name=this.refs.name.value;
    let email=this.refs.email.value;
    let phone=this.refs.phone.value;
    let total=Math.round(this.state.cart.total * 100)/100;
    let date=moment().add(15,'minutes').calendar();

    $.ajax({
        type: 'POST',
        url: 'https://api.backendless.com/v1/messaging/email',
        contentType: 'application/json',
        data: JSON.stringify({
            subject: "order " + name,
            bodyparts:{
              textmessage: "order: " +items + " " + phone + "Total:" + total +"Picking up at " + date
            },
            to:['drake_fish@yahoo.com']
        }),
        success:(response)=>{
          console.log('message-sent');

    }
});
}
});
