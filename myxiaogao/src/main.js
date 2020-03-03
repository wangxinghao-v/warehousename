// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import "./font/iconfont.css"

//引入vuex
import store from './store'
//引入mit-ui
import MintUI from 'mint-ui'
//引入样式
import "mint-ui/lib/style.css"
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
//引用指定义的bus公交js组件这样这样全局都能用它的函数和变零有点相当于vuex

import bus from './router/bus.js'
Vue.prototype.$bus=bus;
Vue.use(Vant);
Vue.use(MintUI);
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios = axios
Vue.prototype.HOST = '/api'
//Vue.prototype.GETS = '/api2'
Vue.config.productionTip = false
Vue.config.productionTip = false
axios.defaults.withCredentials=true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
