import VueRouter from 'vue-router'
import Vue from 'vue';
import Index from 'components/Index/index.vue'
import viewTop from 'components/pages/top.vue'
import viewIn from 'components/pages/in.vue'
import viewCome from 'components/pages/come.vue'
// 导入路由
Vue.use(VueRouter)
// 定义路由
const routes = [{
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
        component: viewTop,
        alias: '/view/in_theaters'
    },
    {
        path: '/viewCome',
        component: viewTop,
        alias: '/view/coming_soon'
    }
]
// 创建一个路由器实例
const router = new VueRouter({
    routes
})
// 导出路由器实例
export default router;