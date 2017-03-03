import $ from 'jquery'
import Vue from 'vue'

import App from './App.vue'
import router from './router/router.js'
import store from './vuex/store.js'
// 添加ajax请求库
import axios from 'axios'
// 引入jquery
window.$ = $;


Vue.prototype.$http = axios;
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')