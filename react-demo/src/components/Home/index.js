
import React,{Component} from "react";
import {connect} from "react-redux";
import "../../assets/iconfont/iconfont.css";
import ReactSwipe from "react-swipe";
import {NavLink} from "react-router-dom";
import {axiosLoopList,axiosHomeList} from "../../actions";
import "./index.scss";


class Home extends Component{

    componentWillMount(){
        this.props.axiosLoopList();
        this.props.axiosHomeList();
    }

    render(){
        const {loopList,hotList,lastList,adsList,discountList,rareList} =this.props;
        //console.log(hotList)
        var looplist=[];
        var hotlist=[];
        var lastlist=[];
        var adslist=[];
        var discountlist=[];
        var rarelist=[];
        // 轮播部分
        if(!loopList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<loopList.length;i++){
                looplist.push(<li key={loopList[i].url}><img src={loopList[i].imgUrl} alt="" /></li>)
            }
        }
        //hot部分
        if(!hotList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<hotList.length;i++){
                //str=(hotList[i].url.split("="))[1][i]
                hotlist.push(<li key={hotList[i].url}>
                                <img src={hotList[i].thumbnail} alt=""/>
                                <p>{hotList[i].actName}</p>
                                <span>{hotList[i].date}</span>
                            </li>)
            }
        }
        //last部分
        if(!lastList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<lastList.length;i++){
                lastlist.push(<li key={lastList[i].url}>
                                <img src={lastList[i].thumbnail} alt=""/>
                                <p>{lastList[i].actName}</p>
                                <span>{lastList[i].date}</span>
                            </li>)
            }
        }
        //ads部分
        if(!adsList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<adsList.length;i++){
                adslist.push(<li key={adsList[i].url}>
                                <img src={adsList[i].imgUrl} alt=""/>                                
                            </li>)
            }
        }
        //discount部分
        if(!discountList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<discountList.length;i++){
                discountlist.push(<li key={discountList[i].url}>
                                <img src={discountList[i].thumbnail} alt=""/>
                                <p>{discountList[i].actName}</p>
                                <span>{discountList[i].date}</span>
                            </li>)
            }
        }
        //rare部分
        if(!rareList){
            return <div>数据加载中...</div>
        }else{
            for(var i=0;i<rareList.length;i++){
                rarelist.push(<li key={rareList[i].url}>
                                <img src={rareList[i].thumbnail} alt=""/>
                                <p>{rareList[i].actName}</p>
                                <span>{rareList[i].date}</span>
                            </li>)
            }
        }

        return(
            <div id="home">
                <ul className="loop">
                <ReactSwipe 
                    className="carousel" 
                    swipeOptions={{
                    continuous: true,
                    auto:3000}}
                    key={loopList.length}
                >
                    {
                        looplist 
                    }
                </ReactSwipe>
                </ul>
                <div className="classify">
                    <div className="left">
                        <NavLink to="/product" activeClassName="active">分类</NavLink>
                        <i className="iconfont icon-all"></i>
                    </div>
                    <div className="right">
                    <NavLink to="/person" activeClassName="active">个人中心</NavLink>
                        <i className="iconfont icon-account"></i>
                    </div>
                </div>
                <div className="hot">
                    <div className="hot-t">
                        <h3>Hot Today</h3>
                        <p>热门演出</p>
                    </div>
                    <ul className="hot-b">
                        {
                            hotlist
                        }
                    </ul>
                </div>
                <div className="hot">
                    <div className="hot-t">
                        <h3>Stub Ticket</h3>
                        <p>尾票</p>
                    </div>
                    <ul className="hot-b">
                        {
                            lastlist
                        }
                    </ul>
                </div>
                <ul className="ads">
                    {
                        adslist
                    }
                </ul>
                <div className="hot">
                    <div className="hot-t">
                        <h3>On Sale</h3>
                        <p>折扣票</p>
                    </div>
                    <ul className="hot-b">
                        {
                            discountlist
                        }
                    </ul>
                </div>
                <div className="hot">
                    <div className="hot-t">
                        <h3>Rare</h3>
                        <p>稀缺票</p>
                    </div>
                    <ul className="hot-b">
                        {
                            rarelist
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const getValue = (state)=>{
    //console.log(state)
    return{
        loopList:state.loopList,
        hotList:state.homeList.hot,
        lastList:state.homeList.last,
        adsList:state.homeList.ads,
        discountList:state.homeList.discount,
        rareList:state.homeList.rare
    }
}

export default connect(getValue,{axiosLoopList,axiosHomeList})(Home)

