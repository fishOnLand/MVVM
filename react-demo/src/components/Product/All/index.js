
import React,{Component} from "react";
import {connect} from "react-redux";
import {axiosAllList} from "../../../actions";
import "./index.scss";

class All extends Component{

    componentWillMount(){
        this.props.axiosAllList()
    }
    detailClick(attr){
        var id = attr.eventId;
        var actCode = attr.actCode
        //console.log(id,actCode)
        this.props.history.push(`/detail/${actCode}&id=${id}`)
        
    }

    changePageClick(e){
        var page = e.currentTarget.getAttribute('page-index');
        var params = {
            page: parseInt(page)
        };
        this.props.axiosAllList(params)
    }

    render(){
        const {allList} =this.props
        var alllist=[];
        var pagelist=[];
        var pages = 9;
        for(var i=1;i<=pages;i++){
            pagelist.push(
                <li key={i}>
                    <a href="javascript:void(0)" 
                        page-index={i} 
                        onClick={(e)=>this.changePageClick(e)
                    }>{i}</a>
                </li>
            )
        }
        if(!allList){
            return <div>数据请求中</div>
        }else{
            for(var i=0;i<allList.length;i++){
                alllist.push(
                    <li key={allList[i].eventId} onClick={this.detailClick.bind(this,allList[i])}>
                        <img src={allList[i].actImgUrl} alt=""/>
                        <h4>{allList[i].actName}</h4>
                        <span>{allList[i].actFrom}</span>
                        <p>{allList[i].address}{allList[i].veName}</p>
                        <a href="#">预定中</a>
                        <i>¥ {allList[i].lowPrice} 起</i>
                    </li>
                )
            }
        }
        return(
            <div id="all">
                <ol className="all-info">
                    {
                        alllist
                    }      
                </ol>
                <div className="container">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            {
                                pagelist
                            }
                        </ul>
                    </nav>
                </div>
            </div>           
        )
    }
}

const getValue = (state)=>{
    //console.log(state)
    return{
        allList:state.allList
    }
}

export default connect(getValue,{axiosAllList})(All);