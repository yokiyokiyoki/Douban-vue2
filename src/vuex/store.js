import Vuex from 'vuex'
import Vue from 'vue'

// 显式调用
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        listData: [{}, {}, {}],
        sliceListData: [{}, {}, {}],
        topComplete: false,
        topSpinner: true,
        inComplete: false,
        inSpinner: true,
        comeComplete: false,
        comeSpinner: true
    },
    mutations: {
        // state的变化必须要在这里体现
        // 但是这里不能体现异步逻辑
        getTopMovie(state, payload) {
            state.listData[0] = payload.data;
            state.sliceListData[0] = payload.data.slice(0, 6);
            state.topComplete = payload.topComplete;
            state.topSpinner = payload.topSpinner;
        },
        getInMovie(state, payload) {
            state.listData[1] = payload.data;
            state.sliceListData[1] = payload.data.slice(0, 6);
            state.inComplete = payload.inComplete;
            state.inSpinner = payload.inSpinner;
        },
        getSoonMovie(state, payload) {
            state.listData[2] = payload.data;
            state.sliceListData[2] = payload.data.slice(0, 6);
            state.comeComplete = payload.comeComplete;
            state.comeSpinner = payload.comeSpinner;
        },
    },
    actions: {
        // 这里可以体现异步逻辑，写完之后要提交commit给mutations
        // 执行actions的话，可以在组件里体现，如this.$store.dispatch('getTopMovie');
        getTopMovie({
            commit
        }) {
            var self = this;
            // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
            // this.$http.get('/v2/movie/top250').then(function (res) {
            //     self.listData[0] = res
            // })
            $.ajax({
                url: 'https://api.douban.com/v2/movie/top250',
                dataType: 'jsonp',
                type: 'get',
                success: function (res) {
                    let payload = {};
                    payload.data = res.subjects;

                    payload.topComplete = true;
                    payload.topSpinner = false;
                    commit('getTopMovie', payload)
                }
            })
        },
        // 参数解构
        getInMovie({
            commit
        }) {
            var self = this;
            // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
            // this.$http.get('/v2/movie/in_theaters').then(function (res) {
            //     self.listData[1] = res
            // })
            $.ajax({
                url: 'https://api.douban.com/v2/movie/in_theaters',
                dataType: 'jsonp',
                type: 'get',
                success: function (res) {
                    let payload = {};
                    payload.data = res.subjects;
                    payload.inComplete = true;
                    payload.inSpinner = false;
                    commit('getInMovie', payload)
                }
            })
        },
        getSoonMovie({
            commit
        }) {
            var self = this;
            // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
            // this.$http.get('/v2/movie/coming_soon').then(function (res) {
            //     self.listData[2] = res
            // })
            $.ajax({
                url: 'https://api.douban.com/v2/movie/coming_soon',
                dataType: 'jsonp',
                type: 'get',
                success: function (res) {
                    let payload = {};
                    payload.data = res.subjects;
                    payload.comeComplete = true;
                    payload.comeSpinner = false;
                    commit('getSoonMovie', payload)
                }
            })
        },
    }
})
export default store;