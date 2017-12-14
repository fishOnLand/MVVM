<template>
    <div id="playing">
        <!-- v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0"
            infinite-scroll-immediate-check="false" -->
        <ul>
            <li v-for="data in nowplayinglist" :key="data.id" @click="turnToDetail(data.id)">
                <img :src="data.poster.origin" />
                <h3>{{data.name}}</h3>
                <p>{{data.intro}}</p>
                <div>
                    <span>{{data.cinemaCount}}</span> 家影院上映
                    <span>{{data.watchCount}}</span> 人购票
                </div>
                <i class="position">{{data.grade}}</i>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import { Indicator } from 'mint-ui';
import router from "@/router";
    export default {
        data(){
            return{
                loading:false,
                current:1,
                total:7,
            }
        },
        mounted(){
            // Indicator.open("数据加载中...");
            // axios.get("/v4/api/film/now-playing",{
            //     params:{
            //         page:this.current,
            //         count:this.total
            //     }
            // }).then(res=>{
            //     this.nowplayinglist=res.data.data.films
            //     Indicator.close()
            // })
            //console.log(this.$store.state.nowplayinglist)
            if(!this.$store.state.nowplayinglist){
                this.$store.dispatch("getNowplayingList","/v4/api/film/now-playing")
            }
        },

        computed:{
            nowplayinglist(){
                if(this.$store.state.nowplayinglist){
                    return this.$store.state.nowplayinglist
                }else{
                    return []
                }   
            }
        },

        methods:{
            // loadMore(){
            //     Indicator.open("数据加载中...");
            //     this.current++;
            //      axios.get("/v4/api/film/now-playing",{
            //         params:{
            //             page:this.current,
            //             count:this.total
            //         }
            //     }).then(res=>{
            //         this.nowplayinglist=[...this.nowplayinglist,...res.data.data.films];
            //         Indicator.close()
            //     });
            //     if(this.current==7){
            //         this.loading=true;
            //     }
            // },
            turnToDetail(id){
                router.push(`/detail/${id}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #playing{
        width: 100%;
        background: #f9f9f9;
        ul{
            width: 100%;
            li{
                padding: 20px 0;
                height: 110px;
                font:14px/30px "";
                border-bottom: #999 1px dashed;
                color:#666;
                position: relative;
                h3{
                    font-size: 18px;
                    color:#000;
                }
                img{
                    width: 80px;
                    float: left;
                    overflow: hidden;
                    margin-right:20px;
                }
                span{
                    color:#8aa2bf
                }
                .position{
                    position:absolute;
                    top:20px;
                    right: 20px;
                    font-size: 18px;
                    color:orange;
                }
            }
        }
    }

</style>