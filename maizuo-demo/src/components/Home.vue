<template>
    <div id="home">
        <swipe class="my-swipe">
		    <swipe-item class="slid1" v-for="data in looplist" :key="data.id">
                <img :src="data.imageUrl"/>
            </swipe-item>
	    </swipe>
        <ul class="homeplay">
            <li v-for="data in homeplaylist" :key="data.id">
                <img :src="data.cover.origin" />              
                <div class="font">
                    <h3>{{data.name}}</h3>
                    <span>{{data.cinemaCount}}家影院上映</span>
                    <span>{{data.watchCount}}人购票</span>
                    <i class="position">{{data.grade}}</i>
                </div>
            </li>
        </ul>
        <div class="hasmore">
            <router-link to="/film/nowplaying" tag="p">更多热映电影</router-link>
        </div>
        <ul class="homecome">
            <li v-for="data in homecomelist" :key="data.id">
                <img :src="data.cover.origin" />              
                <div class="font">
                    <h3>{{data.name}}</h3>
                    <span>{{data.cinemaCount}}家影院上映</span>
                    <span>{{data.watchCount}}人购票</span>
                    <i class="position">{{data.grade}}</i>
                </div>
            </li>
        </ul>
         <div class="hasmore">
            <router-link to="/film/comingsoon" tag="p">更多即将上映电影</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        data(){
            return{

            }
        },
        components:{
           swipe:Swipe,
           "swipe-item":SwipeItem
        },
        mounted(){
            // axios.get("/v4/api/billboard/home?__t=1512613207749").then(res=>{
            //     this.looplist=res.data.data.billboards
            // });
            // axios.get("/v4/api/film/now-playing").then(res=>{
            //     this.homeplaylist=res.data.data.films
            // });
            // axios.get("/v4/api/film/coming-soon").then(res=>{
            //     this.homecomelist=res.data.data.films
            // })
            // Promise.all([
            //     axios.get("/v4/api/billboard/home"),
            //     axios.get("/v4/api/film/now-playing"),
            //     axios.get("/v4/api/film/coming-soon")
            //     ]).then(res=>{
            //         this.looplist=res[0].data.data.billboards;
            //         this.homeplaylist=res[1].data.data.films;
            //         this.homecomelist=res[2].data.data.films
            //     })


            //判断请求是否为空。若是，请求，反之，不再请求，实现状态管理
            if(!this.$store.state.looplist&&!this.$store.state.homeplaylist&&!this.$store.state.homecomelist){
                this.$store.dispatch("getHomeList",[
                    "/v4/api/billboard/home",
                    "/v4/api/film/now-playing",
                    "/v4/api/film/coming-soon"
                ])
            }
        },
        computed:{
            looplist(){
                //注意，由于是异步请求，数组一开始是为空的，所以需要判断数组是否为空
                if(this.$store.state.looplist){
                    return this.$store.state.looplist
                }else{
                    return []
                }                   
            },
            homeplaylist(){
                if(this.$store.state.homeplaylist){
                    return this.$store.state.homeplaylist
                }else{
                    return []
                }               
            },
            homecomelist(){
                if(this.$store.state.homecomelist){
                    return this.$store.state.homecomelist
                }else{
                    return []
                }               
            }
        }
    }
</script>
<style lang="scss" scoped>
    #home{
        background: #f2f2f2;
        width:100%;
        padding-bottom: 20px;
        margin-top:50px;
        .my-swipe{
            width:100%;
            height:230px;
            img{
                width:100%;
                display: block;
            }
        }
        .hasmore{
            width: 150px;
            margin: 0 auto;
            font: 14px/28px "";
            color:#000;
            text-align: center;
            border: 1px solid #999;
            border-radius: 14px;
        }
        .homeplay{
            padding: 20px;
            li{
                width:100%;
                img{
                    width: 100%;
                    display: block;
                }
                .font{
                    background: #fff;
                    position: relative;
                    span{
                        font:14px/22px "";
                        color:#333;
                    }
                    .position{
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        color:orange;
                        font:18px/22px "";
                    }
                } 
            }
        }
        .homecome{
            padding: 20px;
            li{
                width:100%;
                img{
                    width: 100%;
                    display: block;
                }
                .font{
                    background: #fff;
                    position: relative;
                    span{
                        font:14px/22px "";
                        color:#333;
                    }
                    .position{
                        position: absolute;
                        top: 20px;
                        right: 10px;
                        color:orange;
                        font:18px/22px "";
                    }
                } 
            }
        }
    }
</style> 