
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from "./store";

Vue.use(Mint);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
