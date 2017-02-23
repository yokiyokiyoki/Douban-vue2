import VueRouter from 'vue-router'
import Vue from 'vue';
const glen = {
    template: '<div style="font-size:50px;">Glen</div>'
};
const yujin = {
    template: '<div style="font-size:50px;">浴巾</div>'
};
const zeyuan = {
    template: '<div style="font-size:50px;">泽源</div>'
};
const timo = {
    template: '<div style="font-size:50px;">timo</div>'
};
const zhuocheng = {
    template: '<div style="font-size:50px;">卓承</div>'
};
const yoki = {
    template: '<div style="font-size:50px;">yoki</div>'
};
// 导入路由
Vue.use(VueRouter)
// 定义路由
const routes = [{
    path: '/glen',
    component: glen
}, {
    path: '/yujin',
    component: yujin
}, {
    path: '/timo',
    component: timo
}, {
    path: '/zeyuan',
    component: zeyuan
}, {
    path: '/zhuocheng',
    component: zhuocheng
}, {
    path: '/yoki',
    component: yoki
}]
// 创建一个路由器实例
const router = new VueRouter({
    routes
})
// 导出路由器实例
export default router;