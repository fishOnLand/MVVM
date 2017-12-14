<template>
    <div id="navbar">
        <slot></slot>
        <div class="right">     
            <span>城市</span>
            <i class=" iconfont icon-account"></i>     
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
    
            }
        },
        methods:{

        }
    }
</script>

<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
    #navbar{
        padding: fixed;
        top:0;
        left: 0;
        height: 50px;
        background: #333;
        font:16px/50px "";
        color:#fff;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 11;
        i{
            margin:0 10px;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
    }
</style>