import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/Home";
import Film from "../components/Film";
import Nowplaying from "../components/Nowplaying";
import Comingsoon from "../components/Comingsoon";
import Detail from "../components/Detail"

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path:"/home",
            component:Home
        },
        {
            path:"/film",
            component:Film,
            children:[
                {
                    path:"nowplaying",
                    component:Nowplaying
                },
                {
                    path:"comingsoon",
                    component:Comingsoon
                },
                {
                    path:"/",
                    redirect:"/film/nowplaying"
                }
            ]
        },
        {
            path:"/detail/:stateroute",
            component:Detail
        },
        {
            path:"/",
            redirect:"/home"
        }
    ]
})
