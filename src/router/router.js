import VueRouter from 'vue-router'
import Vue from 'vue';
import Index from 'components/Index/index.vue'
import viewTop from 'components/pages/top.vue'
import viewIn from 'components/pages/in.vue'
import viewCome from 'components/pages/come.vue'
import viewDetail from 'components/pages/detail.vue'
// 导入路由
Vue.use(VueRouter)
// 定义路由
const routes = [
    // 默认App.Vue的router-view是这里
    {
        path: '/',
        component: Index
    },
    {
        path: '/viewTop',
        component: viewTop,
        alias: '/view/top250'
    },
    {
        path: '/viewIn',
        component: viewIn,
        alias: '/view/in_theaters'
    },
    {
        path: '/viewCome',
        component: viewCome,
        alias: '/view/coming_soon'
    },
    {
        path: '/viewDetail/:id',
        component: viewDetail,
        name: 'detail'
    }
]
// 创建一个路由器实例
const router = new VueRouter({
    routes
})
// 导出路由器实例
export default router;