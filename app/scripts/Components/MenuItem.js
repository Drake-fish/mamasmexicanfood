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
          return <label><input type="checkbox" value={opt} onChange={this.toggleToppings} ref={opt}/>No {opt}</label>
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
                  <form onSubmit={this.handleSubmit}>
                    {toppings}
                    <input type="submit" className="add" value={this.props.items.price}/>
                  </form>
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

  handleSubmit(e){
    e.preventDefault();
    let array=[];
    _.mapObject(this.refs,(ref, val)=>{
      if(ref.checked){
        array.push("No "+val);
      }
    });
    var item={name:this.props.items.name,
              toppings:array,
              price:this.props.items.price,
              quantity:1}
    store.cart.addItem(item);
    store.cart.getTotal();
  }


});
