<template>
    <div id="detail">
        <div class="filminfo" v-if="detaillist">
			<img :src="detaillist.cover.origin" />
			<div class="font">
                <h3>影片简介</h3>
                <p>导  演 : {{detaillist.director}}</p>
                <p>类  型 : {{detaillist.category}}</p>
                <p class="te">{{detaillist.synopsis}}</p>
            </div>
		</div>
        <div v-else>
            <p>数据加载中...</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data(){
            return{
                detaillist:''
            }
        },
        mounted(){
            //console.log(this.$route.params.stateroute)
            var id = this.$route.params.stateroute
            axios.get(`/v4/api/film/${id}?__t=1512703509425`).then(res=>{
                this.detaillist=res.data.data.film
                //console.log(this.detaillist)
                this.$store.dispatch("changeTitle",this.detaillist.name)
            })
        }
    }
</script>

<style lang="scss" scoped>
    #detail{
        margin-top:50px;
        overflow: hidden;
        background: #f9f9f9;  
        .font{
            padding: 0 10px;
        }
         img{
                width: 100%;
            }
        .filminfo{
            width: 100%;
            h3{
                margin:15px;
                color:#555;
            }
            p{
                font:12px/30px "";
                margin-left:20px;
                color: #333;
            }
            .te{
                font:12px/24px "";
            }
        }
    }
</style>