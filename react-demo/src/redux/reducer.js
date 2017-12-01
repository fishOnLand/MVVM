
var _ = require("lodash")

var initialState={
	loopList:{},
	homeList:{},
	allList:[],
	consertList:[],
	operaList:[],
	playingList:[],
	detailList:{},
	ticketList:[],
	searchList:[],
	cartList:[]
}

const HomeReducer = (state=initialState,action)=>{
	switch(action.type){
		case "INCREASE":
			return Object.assign({},state,{count:state.count+1})
		case "DECREASE":
			return Object.assign({},state,{count1:state.count1-1})
		case "GETLOOPLIST":
			return Object.assign({},state,{loopList:action.data})
		case "GETHOMELIST" :
			return Object.assign({},state,{homeList:action.data})
		case "GETALLLIST" :
			return Object.assign({},state,{allList:action.data})
		case "GETCONSERTLIST" :
			return Object.assign({},state,{consertList:action.data})
		case "GETOPERALIST" :
			return Object.assign({},state,{operaList:action.data})
		case "GETPLAYINGLIST" :
			return Object.assign({},state,{playingList:action.data})
		case "GETDETAILLIST" :
			return Object.assign({},state,{detailList:action.data})
		case "GETTICKETSINGER" :
			return Object.assign({},state,{ticketList:action.data})
		case "GETSEARCHLIST" :
			return Object.assign({},state,{searchList:action.data})
		case "GETCARTLIST" :
			//找此产品有没有，没有则数量为1，有则数量+1
			//var pos = _.findIndex(state.cartList,{"id":action.data.ticketId});
			// if(pos===null){
			// 	action.data.quantity=1
			// }else{
			// 	action.data.quantity=state.cartList[pos].quantity+1
			// }

			return {
				...state,
				cartList:[...state.cartList,action.data]
			}
		default :
			return state;
	}
}

export default HomeReducer;

