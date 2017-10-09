import React from 'react';
import MenuItem from './MenuItem';

export default React.createClass({
  getInitialState(){
    return{
            open:false,
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
          return (<div key={i} className="open-section">
                    <MenuItem items={item}/>
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
    this.setState({open:!this.state.open})
  }
});
