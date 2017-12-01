
import React,{Component} from "react";
import {connect} from "react-redux";
import {axiosTicketSingerList,axiosCartList} from "../../../actions";
import "./index.scss";
import {NavLink} from "react-router-dom";


class TicketPrice extends Component{

    componentWillMount(){
        this.props.axiosTicketSingerList(this.props.id,{})
    }

    changePageClick(e){
        var page = e.currentTarget.getAttribute('page-index');
        var params = {
            page: parseInt(page),
            id:this.props.id
        };
        this.props.axiosTicketSingerList(this.props.id,params)
    }

    addClick(e){
        var index = e.currentTarget.getAttribute("data-cart");
        const addToCart = this.props.ticketList[index];
        this.props.axiosCartList(addToCart)
    }

    render(){
        const {ticketList,cartList} =this.props;
        //通过super继承获取到id
        var ticketlist=[];
        //分页部分
        var pagelist=[];
        var pages = 3;
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
        if(!ticketList){
            return <div>数据加载中...</div>
        }
        else{
            for(var i=0;i<ticketList.length;i++){
                ticketlist.push(
                    <li key={ticketList[i].ticketId} className="ticket-intro">
                        <div className="left">
                            <h4>{ticketList[i].title}</h4>
                            <p>{ticketList[i].deliveryTime}</p>
                            <p>卖家保证会 : {ticketList[i].depositText}</p>
                        </div>
                        <div className="right">
                            <h4>¥ {ticketList[i].price}</h4>
                            <span>票面价 : ¥ {ticketList[i].facePrice}</span>
                            <p>剩余张数 : {ticketList[i].leftQuantity}</p>
                            <button className="btn btn-warning wid"
                                    data-cart={i}
                                    onClick={(e)=>this.addClick(e)}
                            >购买</button>
                            <NavLink to="/cart" type="button" 
                                    className="btn btn-warning wid"
                            >查看购物车</NavLink>
                        </div>
                    </li>
                )
            }
        }
        return(
            <div id="price">              
                <ul className="ticket">
                   {
                       ticketlist
                   }     
                </ul> 
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
    return{
        ticketList:state.ticketList,
        cartList:state.cartList
    }
}

export default connect(getValue,{axiosTicketSingerList,axiosCartList})(TicketPrice);