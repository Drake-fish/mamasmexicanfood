import React from 'react';

export default React.createClass({
  render(){
      let description;
      let extras;
      let extraPrice;
      if(this.props.items.description){
        description=<p className="description">{this.props.items.description}</p>;
      }
      if(this.props.items.extra){
        extras=<p className="description">{this.props.items.extra}</p>;
      }
      if(this.props.extraPrice){
        extraPrice=<h5 className="price">{this.props.items.extraPrice}</h5>;
      }
    return(
          <li>
            <h5 className="name">{this.props.items.name}</h5>
            <h5 className="price">{this.props.items.price}</h5>
            {description}
            {extras}
            {extraPrice}
          </li>
    );
  }
});
