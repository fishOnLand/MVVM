<template>
    <transition name="bounce">
        <div id="sidebar" v-show="value">
            <ul @click="hideClick">
                <router-link to="/home" tag="li" activeClass="active">首页</router-link>
                <router-link to="/film" tag="li" activeClass="active">电影</router-link>
            </ul>
        </div>
    </transition>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
       props:["value"],
        methods:{
            hideClick(){
                this.$emit("input",false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #sidebar{
        position: fixed;
        top: 50px;
        left: 0;
        width: 60%;
        height: 100%;
        z-index: 10;
        background: #333;
        ul{
            margin-top:30px;
            width: 100%;
            padding: 0 20px;
            li{
                font:16px/40px "";
                color: #fff;
            }
            .active{
                color:orangered;
            }
        }
    }
    .bounce-enter-active {
            animation: bounce-in .5s;
        }
        .bounce-leave-active {
            animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            /**50% {
                transform: translateX(-60%);
                opacity:0.5;
            }**/
            100% {
                transform: translateX(0);
                opacity:1;
            }
        }
</style>