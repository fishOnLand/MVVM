import React, { Component } from 'react';
import "./index.scss";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Sidebar extends Component {
 

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {
          this.props.isShow?
          <div id="sidebar">
            <ul className="sidebar-list" onClick={this.clickShow.bind(this)}>
              <li><NavLink to="/product/all" activeClassName="active">全部</NavLink></li>
              <li><NavLink to="/product/Consert" activeClassName="active">音乐会</NavLink></li>
              <li><NavLink to="/product/Opera" activeClassName="active">话剧歌剧</NavLink></li>
              <li><NavLink to="/product/playing" activeClassName="active">休闲娱乐</NavLink></li>
              <li><NavLink to="/home" activeClassName="active">返回主页</NavLink></li>
            </ul>
          </div>
          :null
        }
        </ReactCSSTransitionGroup>
      </div>
    )      
  }
  clickShow(){
    this.props.event()
  }
}

export default Sidebar;
