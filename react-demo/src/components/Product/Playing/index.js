
import React,{Component} from "react";
import {connect} from "react-redux";
import {axiosPlayingList} from "../../../actions";
import "./index.scss";

class playing extends Component{

    componentWillMount(){
        this.props.axiosPlayingList()
    }
    render(){
        const {playingList} =this.props
        var playinglist=[];
        if(!playingList){
            return <div>数据请求中</div>
        }else{
            for(var i=0;i<playingList.length;i++){
                playinglist.push(
                    <li key={playingList[i].eventId}>
                        <img src={playingList[i].actImgUrl} alt=""/>
                        <h4>{playingList[i].actName}</h4>
                        <span>{playingList[i].actFrom}</span>
                        <p>{playingList[i].address}{playingList[i].veName}</p>
                        <a href="#">预定中</a>
                        <i>¥ {playingList[i].lowPrice} 起</i>
                    </li>
                )
            }
        }
        return(
            <div id="play">
                <ul className="play-info">
                {
                    playinglist
                }
                </ul>
          </div>
        )
    }
}

const getValue = (state)=>{
    //console.log(state)
    return{
        playingList:state.playingList
    }
}

export default connect(getValue,{axiosPlayingList})(playing);