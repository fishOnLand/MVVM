<template>
    <div id="coming">
        <ul class="firstpage">
            <li v-for="data in comingsoonlist" :key="data.id" @click="turnToDetail(data.id)">
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
        <div class="pagination">
            <a href="javascript:void(0)"  @click="page(-1)">上一页</a>
            <a href="javascript:void(0)"  @click="page(1)">下一页</a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Indicator } from 'mint-ui';
import router from "../router";
    export default {
        data(){
            return{
                comingsoonlist:[],
                current:1,
                total:17,            
            }
        },
        // render(createElement){
        //     for(var i=0;i<this.total;i++){
        //         this.pagelist.push(`<li key="i">{{i}}</li>`)
        //     }
        //     return createElement('ul',pagelist)
        // },
        methods:{
            
            page(a){
                this.current = this.current+a;
                if(this.current<1){
                    this.current=1
                    axios.get("/v4/api/film/coming-soon",{
                        params:{
                            page:this.current,
                            count:7
                        }
                    }).then(res=>{
                        this.comingsoonlist=res.data.data.films;
                        this.total=res.data.data.page.total; 
                    });
                }else{
                    Indicator.open("数据加载中...");
                    axios.get("/v4/api/film/coming-soon",{
                        params:{
                            page:this.current,
                            count:7
                        }
                    }).then(res=>{
                        this.comingsoonlist=res.data.data.films;
                        this.total=res.data.data.page.total;
                        Indicator.close();
                    });
                }
                //console.log(this.current)              
            },
            turnToDetail(id){
                router.push(`/detail/${id}`);
            }
        },
        mounted(){
            this.page(0);
        },
    }
</script>

<style lang="scss" scoped>
    #coming{
        width: 100%;
        background: #f9f9f9;
        .firstpage{
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
        .pagination{
            display: flex;
            width: 200px;
            border-radius: 20px;
            margin: 0 auto;
            a{
                flex:1;
                width: 100%;
                font:16px/40px "";
                color: #000;
                text-align: center;
            }
        }
    }
</style>