
import axios from "axios";
export const increase = ()=>{
    return{
        type:"INCREASE"
    }
}

export const decrease = ()=>{
    return{
        type:"DECREASE"
    }
}
//homeloop
export const getLoopList = (data)=>{
    return{
        type:"GETLOOPLIST",
        data
    }
}

export function axiosLoopList(){
    return (dispatch)=>{
        return axios.get("/ajax/home/banner").then(res=>{
            dispatch(getLoopList(res.data.result))
        })
    }
}
//homelist
export const getHomeList = (data)=>{
    return{
        type:"GETHOMELIST",
        data
    }
}

export function axiosHomeList(){
    return (dispatch)=>{
        return axios.get("/ajax/home/tickets").then(res=>{
            //console.log(res.data.result)
            dispatch(getHomeList(res.data.result))
        })
    }
}

//productlist-all
export const getAllList = (data)=>{
    return{
        type:"GETALLLIST",
        data
    }
}

export function axiosAllList(params={page:1}){
    return (dispatch)=>{
        return axios.get(`/ajax/activity/list?frontCate=&date=&order=&page=${params.page}`).then(res=>{
            dispatch(getAllList(res.data.result.list))
        })
    }
}
//productlist-consert
export const getConsertList = (data)=>{
    return{
        type:"GETCONSERTLIST",
        data
    }
}

export function axiosConsertList(){
    return (dispatch)=>{
        return axios.get("/ajax/activity/list?frontCate=yinyuehui&date=&order=&page=1").then(res=>{
            dispatch(getConsertList(res.data.result.list))
        })
    }
}
//productlist-opera
export const getOperaList = (data)=>{
    return{
        type:"GETOPERALIST",
        data
    }
}

export function axiosOperaList(){
    return (dispatch)=>{
        return axios.get("/ajax/activity/list?frontCate=huajugeju&date=&order=&page=1").then(res=>{
            dispatch(getOperaList(res.data.result.list))
        })
    }
}
//productlist-playing
export const getplayingList = (data)=>{
    return{
        type:"GETPLAYINGLIST",
        data
    }
}

export function axiosPlayingList(){
    return (dispatch)=>{
        return axios.get("/ajax/activity/list?frontCate=xiuxianyule&date=&order=&page=1").then(res=>{
            dispatch(getplayingList(res.data.result.list))
        })
    }
}
//detail-top
export const getDetailList = (data)=>{
    return{
        type:"GETDETAILLIST",
        data
    }
}

export function axiosDetailList(actCode){
    return (dispatch)=>{
        return axios.get(`/ajax/activity/detail?actCode=${actCode}`).then(res=>{
            dispatch(getDetailList(res.data.result))
        })
    }
}

//detail-bottom
export const getTichekSinger = (data)=>{
    return{
        type:"GETTICKETSINGER",
        data
    }
}

export function axiosTicketSingerList(id,params={page:1}){
    // if(id){
    //     id=id
    // }else{
    //     id:params.id
    // }
    return (dispatch)=>{
        return axios.get(`/ajax/activity/tickets?eventId=${id}&dId=&order=0&seat=&page=${params.page}`).then(res=>{
            dispatch(getTichekSinger(res.data.result.list))
        })
    }
}

//searchlist
export const getSearchList = (data)=>{
    return{
        type:"GETSEARCHLIST",
        data
    }
}

export function axiosSearchList(keyword=""){
    return (dispatch)=>{
        return axios.get(`/ajax/keywords?q=${keyword}`).then(res=>{
            dispatch(getSearchList(res.data.result))
        })
    }
}

//addtocart
export const getCart = (data)=>{
    return{
        type:"GETCARTLIST",
        data
    }
}

export function axiosCartList(params){
    return (dispatch)=>{
        dispatch(getCart(params))
    }
}

