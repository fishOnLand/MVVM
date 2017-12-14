import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import { Indicator } from 'mint-ui';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        title:"卖座电影",
        looplist:[],
        homeplaylist:[],
        homecomelist:[],
        nowplayinglist:[]
    },

    actions:{
        changeTitle(state,title){
            store.commit("mutateTitle",title)           
        },
        getHomeList(state,arr){
            store.commit("mutateHomeList",arr)
        },
        getNowplayingList(state,arr){
            store.commit("mutateNowPlaying",arr)
        } 
    },

    mutations:{
        mutateTitle(state,title){
            state.title=title
        },
        mutateHomeList(state,arr){
            Promise.all([
                axios.get(arr[0]),
                axios.get(arr[1]),
                axios.get(arr[2])
            ]).then(res=>{                
                state.looplist=res[0].data.data.billboards;
                state.homeplaylist=res[1].data.data.films;
                state.homecomelist=res[2].data.data.films;
                //console.log(state.looplist,state.homeplaylist,state.homecomelist)
            })
        },
        mutateNowPlaying(state,arr){
            Indicator.open("数据加载中...")
            axios.get(arr).then(res=>{
                state.nowplayinglist=res.data.data.films;
                Indicator.close()
            })
        }  
    }
})

export default store;