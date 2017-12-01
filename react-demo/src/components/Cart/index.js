
import React,{Component} from "react";
import {connect} from "react-redux";
// import "../../assets/iconfont/iconfont.css";
import {NavLink} from "react-router-dom";
import "./index.scss";
var _ = require("lodash")

class Cart extends Component{

    componentWillMount(){
       
    }

    render(){
        const {cartList} = this.props;
        var unipCart = _.uniq(cartList)
        function getCartNumber(cartList,cartId){  
            var num = 0;          
            for(let i=0;i<cartList.length;i++){
                if(cartList[i]===cartId){
                    num++
                }
            }
            return num
        }

        for(let i=0;i<unipCart.length;i++){
            getCartNumber(cartList,unipCart[i])
        }

        var cartlist=[];
        if(!unipCart){            
               return <div>
                   购物车是空的哦，去购票把
               </div>
        }else{
            for(var i=0;i<unipCart.length;i++){
                cartlist.push(
                    <li key={unipCart[i].ticketId} className="ticket-intro">
                        <div className="left">
                            <h4>{unipCart[i].title}</h4>
                            <p>{unipCart[i].deliveryTime}</p>
                            <p>卖家保证会 : {unipCart[i].depositText}</p>
                        </div>
                        <div className="right">
                            <h4>¥ {unipCart[i].price}</h4>
                            <span>票面价 : ¥ {unipCart[i].facePrice}</span>
                            <p>剩余张数 : {unipCart[i].leftQuantity}</p>
                            <p className="number">数量：{getCartNumber(cartList,unipCart[i])}</p>                         
                        </div>                       
                    </li>
                ) 
            }
        }

        return(
            <div id="cart">
                {
                    cartlist.length===0?
                    <div className="none">
                        <p>购物车是空的哦，去购票吧</p>
                        <p className="red">
                            <NavLink to="/product/all">去买票</NavLink>
                        </p>
                    </div>
                    :null
                }   
               <ul className="cart-info">
                    {
                      cartlist  
                    }
               </ul>
            </div>
        )
    }
}

const getValue = (state)=>{
    return{
        cartList:state.cartList
    }
}

export default connect(getValue)(Cart);
//connect(getValue,{increase,decrease,axiosLoopList})(Counter) 

