import React from 'react';
import _ from 'underscore';
export default React.createClass({
  getInitialState(){
    return{
      selected:false,
      toppings:[]
    }
  },
  render(){
    // let option=  <span className="not-selected" onClick={this.markout}>{this.props.opts}</span>;
    // if(this.state.selected){
    //   option=<input type="checkbox" className="selected" onClick={this.markout}>{this.props.opts}</span>
    // }
    return (<label><input ref={this.props.opts} type="checkbox"/>{this.props.opts}</label>

          );
  },
  markout(e){
    let text=e.target.innerText;
      if(this.state.toppings.indexOf(text)===-1){
        console.log('adding-topping');
        let toppings=this.state.toppings.concat(text);
        this.setState({toppings:toppings});
        console.log(this.state.toppings);
        this.setState({selected:true});

      }else{
        console.log('removing-topping');
        var toppings=_.without(this.state.toppings,text);
        this.setState({toppings:toppings, selected:false});
        console.log(this.state.toppings);
      }


  }
});
