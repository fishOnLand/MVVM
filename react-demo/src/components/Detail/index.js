
import React,{Component} from "react";
import "./index.scss";
import {connect} from "react-redux";
import {axiosDetailList} from "../../actions";
import "../../assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";
import TicketPrice from "./TicketPrice";
import SingerInfo from "./SingerInfo";

class Detail extends Component{
    constructor(data){
        super(data);
        var str = this.props.match.params.fish;
        var eventId = str.split("=")[1]; 
        this.state={
            id:eventId
        }
    }
    componentWillMount(){
        this.props.axiosDetailList(this.props.match.params.fish)
    }

    render(){
        const {detailList} = this.props;
        //console.log(detailList)
        var activityInfo=""
        if(!detailList){
            return<div>数据加载中...</div>
        }else{
            activityInfo=(
                <li key={detailList.actCode}>
                    <img src={detailList.thumbnail} alt=""/>
                    <div>
                        <h4>{detailList.actName}</h4>
                        <p>
                            <i className="iconfont icon-clock"></i>
                            <span>{detailList.actDate}</span>
                        </p>
                        <p>
                            <i className="iconfont icon-bussinessman"></i>
                            <span>{detailList.veName}</span>
                        </p>
                        <div className="price">¥ {detailList.minPrice} <span>起</span></div>
                    </div>
                </li>
            )
        }
        return(
            <div id="detail">
                <div className="logo">
                    <img src={require ("../../assets/image/logo.png")} />
                </div>
                <div className="banner">
                   {
                       activityInfo
                   }
                </div>
                <div className="intro">
                  <ul className="nav nav-tabs ticketinfo" role="tablist">
                    <li role="presentation" className="active ">
                        <a  href="#ticketPrice" 
                            aria-controls="ticketPrice" 
                            role="tab" data-toggle="tab">票品</a>
                    </li>
                    <li role="presentation">
                        <a  href="#singerInfo"
                            aria-controls="singerInfo"
                            role="tab" data-toggle="tab">详情</a>
                    </li> 
                  </ul>
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="ticketPrice">
                        <TicketPrice id={this.state.id}></TicketPrice>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="singerInfo">
                        <SingerInfo/>
                    </div>
                  </div>
                </div>
            </div>       
        )
    }
   
}

const getValue=(state)=>{
    //console.log(state.detailList)
    return{
        detailList:state.detailList.activity
    }
}

export default connect(getValue,{axiosDetailList})(Detail);