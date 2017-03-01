import $ from 'jquery'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
// 添加ajax请求库
import axios from 'axios'

Vue.prototype.$http = axios;
new Vue({
    render: h => h(App),
    router
}).$mount('#app')