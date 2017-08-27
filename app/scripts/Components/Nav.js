
  import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
  getInitialState(){
    return{
      menu:false,
      contact:false
    };
  },
  render(){
    let nav=   (
      <div>
        <i className="fa fa-bars" aria-hidden="true" onClick={this.toggleMenu}></i>
        <nav>
           <Link to="#" ><li onClick={this.toggleMenu} className="nav-link">Home</li></Link>
           <Link to="menu" ><li onClick={this.toggleMenu} className="nav-link">Menu</li></Link>
           <Link to="#story" ><li onClick={this.toggleMenu} className="nav-link">Story</li></Link>
           <Link to="#contact" ><li onClick={this.toggleMenu} className="nav-link">Contact</li></Link>
           <Link to="menu" ><li onClick={this.toggleMenu} className="nav-link">Order</li></Link>
        </nav>
      </div>
    );
    if(this.state.menu){
      nav=(
        <div>
          <i className="fa fa-times" aria-hidden="true" onClick={this.toggleMenu}></i>
          <nav className="nav-open">
            <Link to="#" ><li onClick={this.toggleMenu} className="nav-link home">Home</li></Link>
             <Link to="menu" ><li onClick={this.toggleMenu} className="nav-link">Menu</li></Link>
             <Link to="#story" ><li onClick={this.toggleMenu} className="nav-link">Story</li></Link>
             <Link to="#contact" ><li onClick={this.toggleMenu} className="nav-link">Contact</li></Link>
             <Link to="menu" ><li onClick={this.toggleMenu} className="nav-link">Order</li></Link>
          </nav>
        </div>
      );
    }
    if(this.state.contact){
      nav=(
        <div>
          <i id="close" className="fa fa-times" aria-hidden="true" onClick={this.closeContact}></i>
          <Contact/>
        </div>
      );
    }
    return(<div className="nav">
            {nav}
          </div>
    );
  },
  toggleMenu(){
    this.setState({
      menu:!this.state.menu
    });
  },
  openContact(){
    this.setState({
      contact:true
    });
  },
  closeContact(){
    this.setState({
      contact:false,
      menu:false
    });
  }
});
