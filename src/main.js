import $ from 'jquery'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
new Vue({
    render: h => h(App),
    router
}).$mount('#app')