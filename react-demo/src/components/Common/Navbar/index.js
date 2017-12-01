import React, { Component } from 'react';
import "./index.scss";
import "../../../assets/iconfont/iconfont.css";
class Navbar extends Component {
 

  render() {
    return (
      <div id="navbar">
        <ul className="product-list">
          <li onClick={this.showClick.bind(this)}>
            <i className="iconfont icon-category"></i>
            <span className="">全部</span>           
          </li>
          <li>           
            <span className="">日历</span>
            <i className="iconfont icon-less"></i>         
          </li>
          <li>          
            <span className="">排序</span>
            <i className="iconfont icon-less"></i>        
          </li>
        </ul>
      </div>
    )     
  }
  showClick(){
    this.props.event();
  }
}

export default Navbar;
