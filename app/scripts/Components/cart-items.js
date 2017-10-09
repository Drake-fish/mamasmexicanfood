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
      checkout:false,
      loading:false,
      success:false,
      error:false
    };
  },
  componentDidMount(){
    store.cart.on('change update',()=>{
      this.setState({cart:store.cart.toJSON()});
    });
  },
  render(){

    let allCartItems=this.state.cart.items.map((item,i,arr)=>{
      return(
            <CartItem key={i} item={item}/>
      );
    });




    //default state for bottom total and top cart
    let cart=(
                    <div className="carts">
                    <div className="cart">
                        <i className="fa fa-times" aria-hidden="true" onClick={this.toggleCart}></i>
                        {allCartItems}
                        <div className="cart-total">
                              <button className="checkout">Check out</button>
                              <h4>Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
                        </div>
                      </div>
                      <h4 className="total-bottom" onClick={this.toggleCart}>Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
                    </div>
    );

    //bottom total hidden and detail cart showing
if(this.state.cartOpen){
  cart=(
                  <div className="carts">
                  <div className="cart cart-active">
                      <i className="fa fa-times" aria-hidden="true" onClick={this.toggleCart}></i>
                      {allCartItems}
                      <div className="cart-total">
                            <button onClick={this.toggleCheckout} className="checkout">Check out</button>
                            <h4>Total:  ${Math.round(this.state.cart.total * 100)/100}</h4>
                      </div>
                    </div>
                    <h4 className="total-bottom total-hide" onClick={this.toggleCart}>Total: ${Math.round(this.state.cart.total * 100)/100}</h4>
                  </div>
  );
}

  //default state for checkout form
let checkout=(
              <div className="checkout-form">
              <div onClick={this.toggleCheckout} className="overlay"></div>
                <form className="form" onSubmit={this.checkout}>
                  <input ref="name" type="text" placeholder="Name"/>
                  <input ref="email" type="email" placeholder="Email"/>
                  <input ref="phone" type="phone" placeholder="Phone Number"/>
                  <h3>Estimated time of pick-up</h3>
                  <input type="submit" value="CHECKOUT"/>
                </form>
                </div>
              );
    //when checkout form is submitted and loading
if(this.state.checkout && !this.state.loading){
  checkout=(
            <div className="checkout-form checkout-open">
            <div onClick={this.toggleCheckout} className="overlay"></div>
            <form className="form form-open" onSubmit={this.checkout}>
              <input ref="name" type="text" placeholder="Name"/>
              <input ref="email" type="email" placeholder="Email"/>
              <input ref="phone" type="phone" placeholder="Phone Number"/>
              <h3>Estimated time of pick-up:{moment().add(15,'minutes').calendar()}</h3>
              <input type="submit" value="CHECKOUT"/>
            </form>
            </div>

  )
}else if(this.state.checkout && this.state.loading){
  checkout=(
            <div className="checkout-form checkout-open">
              <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>

  );


}
  //when checkout form is successfully
else if(this.state.checkout && !this.state.loading && this.state.success){
  checkout=(
            <div className="checkout-form checkout-open">
              <h2> Your order has been submitted successfully!</h2>
              <h3> You can pick up your order at {moment().add(15,'minutes').calendar()}</h3>
            </div>

  );
}


    //when checkout form fails

    return(<div className="cart-container">
            {cart}
            {checkout}
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
    this.setState({loading:true});

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
          this.setState({loading: false, success:true});
          window.setTimeout(()=>{
            this.setState({checkout:false})

          });

        }
      });
    }
});
