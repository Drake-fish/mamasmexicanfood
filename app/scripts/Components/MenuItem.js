import React from 'react';
import _ from 'underscore';

import store from '../store';
import Option from './option';

export default React.createClass({
  getInitialState(){
    return{
      open:false,
    }
  },
  render(){
      let description;
      let extras;
      let extraPrice;
      let toppings;
      if(this.props.items.options){
        toppings=this.props.items.options.map((opt)=>{
          return <Option opts={opt}/>
        });
      }

      if(this.props.items.description){
        description=<p className="description">{this.props.items.description}</p>;
      }
      if(this.props.items.extra){
        extras=<p className="description">{this.props.items.extra}</p>;
      }
      if(this.props.extraPrice){
        extraPrice=<h5 className="price">{this.props.items.extraPrice}</h5>;
      }
      let item=(<h5 onClick={this.openMenu} className="name">{this.props.items.name}</h5>);
      if(this.state.open){
        item=(
              <div className="item-detals">
                  <h5 onClick={this.closeMenu} className="name"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>{this.props.items.name}</h5>
                  {description}
                  {toppings}
                  <button  onClick={this.addItem} className="add">Add {this.props.items.price}</button>
              </div>


              );
      }




    return(
          <li>
            {item}
          </li>
    );
  },
  openMenu(){
    this.setState({open:true});
  },
  closeMenu(){
    this.setState({open:false});
  },
  addItem(){
    let toppings=this.state.toppings;
    let price=this.props.items.price;
    let name= this.props.items.name;
    store.cart.addItem(price, 1, name, toppings);
  },

});
