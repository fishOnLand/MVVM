
import React,{Component} from "react";
import {connect} from "react-redux";
import {axiosConsertList} from "../../../actions";
import "./index.scss";

class Consert extends Component{

    componentWillMount(){
        this.props.axiosConsertList()
    }
    render(){
        const {consertList} =this.props
        var consertlist=[];
        if(!consertList){
            return <div>数据请求中</div>
        }else{
            for(var i=0;i<consertList.length;i++){
                consertlist.push(
                    <li key={consertList[i].eventId}>
                        <img src={consertList[i].actImgUrl} alt=""/>
                        <h4>{consertList[i].actName}</h4>
                        <span>{consertList[i].actFrom}</span>
                        <p>{consertList[i].address}{consertList[i].veName}</p>
                        <a href="#">预定中</a>
                        <i>¥ {consertList[i].lowPrice} 起</i>
                    </li>
                )
            }
        }
        return(
            <div id="consert">
                <ul className="consert-info">
                {
                    consertlist
                }
                </ul>
          </div>
        )
    }
}

const getValue = (state)=>{
    //console.log(state)
    return{
        consertList:state.consertList
    }
}

export default connect(getValue,{axiosConsertList})(Consert);