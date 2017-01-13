import React from 'react';
import MenuItem from './MenuItem';

export default React.createClass({
  getInitialState(){
    return{
            open:false
    }
  },
  render(){
      let items;
      if(!this.state.open){
        items=(<div  className="closed-section">
              </div>
            );
      }else{
        items=this.props.data.map((item,i,arr)=>{
          return (<div className="open-section">
                    <MenuItem key={i} items={item}/>
                  </div>
                );
        });
      }
    return(
      <div className="menu-section">
        <h3 onClick={this.toggleMenu} className="title">{this.props.data[0].title}</h3>
        {items}
      </div>
    );
  },
  toggleMenu(){
    if(!this.state.open){
    this.setState({open:true});
    }else{
      this.setState({open:false});
    }
  }
});
