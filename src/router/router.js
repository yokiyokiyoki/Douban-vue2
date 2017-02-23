import VueRouter from 'vue-router'
import Vue from 'vue';
const Page = {
    template: '<div>page</div>'
};
// 导入路由
Vue.use(VueRouter)
// 定义路由
const routes = [{
    path: '/page',
    component: Page
}, ]
// 创建一个路由器实例
const router = new VueRouter({
    routes
})
// 导出路由器实例
export default router;