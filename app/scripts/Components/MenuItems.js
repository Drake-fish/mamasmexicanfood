import React from 'react';
import MenuItem from './MenuItem';

export default React.createClass({
  console.log(this.props);
  let items=this.props.data.map((item,i,arr)=>{
    return <MenuItem key={i} items={item}/>
  });
  render(){
    return(
      <div className="menu-section">
        {items}
      </div>
    );
  }
});
