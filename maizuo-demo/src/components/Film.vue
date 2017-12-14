<template>
    <div id="film">
        <ul class="filmnav">
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.$store.dispatch("changeTitle","卖座电影")
        }
    }
</script>

<style lang="scss" scoped>
    #film{
        margin-top: 50px;
        padding: 10px;
        .filmnav{
            display: flex;
            width:100%;
            border-bottom: 1px solid orange;
            li{
                flex: 1;
                text-align: center;
                font:16px/40px "";
            }
            .active{
                border-bottom: 1px solid orange;
                color:orange;
            }
        }
    }
</style>