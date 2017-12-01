
import React,{Component} from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";
import "./index.scss";
import {axiosSearchList} from "../../actions";
import {connect} from "react-redux";

class Product extends Component{
    constructor(){
        super();
        this.state={
          show:false
        }
    }

    componentWillMount(){
      this.props.axiosSearchList()
    }

    searchChange(e){
      var keyword = e.target.value;
      this.props.axiosSearchList(keyword)
    }
    
    render() {

        const {searchList} = this.props;
        var searchlist=[];
        if(!searchList){
          return <div>搜索中...</div>
        }else{
          for(var i=0;i<searchList.length;i++){
            searchlist.push(
              <li key={searchList[i].actCode}>
                <p>{searchList[i].result}</p>
                <span>{searchList[i].area}</span>
              </li>
            )
          }
        }
        return (
          <div id="product">
            <div className="search">
                <i className="iconfont icon-back zuo"></i>
                <input type="text" placeholder="请输入演出、明星、活动" onChange={this.searchChange.bind(this)}/>
                <i className="iconfont icon-search you"></i>
            </div>
            <div className="searchinfo">
              <ul className="searchinfo-list">
                {
                 searchList? 
                  searchlist
                  :null
                }
              </ul>
            </div>
            <Navbar event={()=>{
              this.setState({
                show:!this.state.show
              })
            }}></Navbar>
            {
              this.props.children
            }
            <Sidebar isShow={this.state.show} event={()=>{
              this.setState({
                show:false
              })
            }}></Sidebar>
          </div>
        );
      }
}

const getValue = (state)=>{
  return{
    searchList:state.searchList
  }
}

export default connect(getValue,{axiosSearchList})(Product);