<template>
    <div id="app">
        <navbar>
            <div class="left">
                <i class=" iconfont icon-category" @click="childmessage"></i>
                <span>{{title}}</span>       
            </div>
        </navbar>
        <sidebar v-model="show"></sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import navbar from "./components/common/Navbar";
import sidebar from "./components/common/Sidebar";
export default {
    data(){
        return{
           show:false 
        }
    },
    methods:{
        childmessage(){
            this.show=!this.show
        }
    },
    components:{
        navbar,
        sidebar,
    },
    computed:{
        title(){
            return this.$store.state.title
        },
    }
}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
    }
    html,body{
        width:100%;
        height:100%;
        background:#f9f9f9;
    }
</style>