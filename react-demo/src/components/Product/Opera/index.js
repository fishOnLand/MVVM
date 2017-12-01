
import React,{Component} from "react";
import {connect} from "react-redux";
import {axiosOperaList} from "../../../actions";
import "./index.scss";

class Opera extends Component{

    componentWillMount(){
        this.props.axiosOperaList()
    }
    render(){
        const {operaList} =this.props
        var operalist=[];
        if(!operaList){
            return <div>数据请求中</div>
        }else{
            for(var i=0;i<operaList.length;i++){
                operalist.push(
                    <li key={operaList[i].eventId}>
                        <img src={operaList[i].actImgUrl} alt=""/>
                        <h4>{operaList[i].actName}</h4>
                        <span>{operaList[i].actFrom}</span>
                        <p>{operaList[i].address}{operaList[i].veName}</p>
                        <a href="#">预定中</a>
                        <i>¥ {operaList[i].lowPrice} 起</i>
                    </li>
                )
            }
        }
        return(
            <div id="opera">
                <ul className="opera-info">
                {
                    operalist
                }
                </ul>
          </div>
        )
    }
}

const getValue = (state)=>{
    //console.log(state)
    return{
        operaList:state.operaList
    }
}

export default connect(getValue,{axiosOperaList})(Opera);