<template>
    <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="selected === item" v-for="item in list" @click="selected = item">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="150px" :show-dots="false">
            <swiper-item v-for="item in listData">
                <div class="tab-swiper vux-center">
                    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
                        <div class="box2">
                            <flexbox orient="vertical">
                                <flexbox-item>
                                    <div class="flex-box flex-box-num" v-for="i in item.subjects">
                                        <flexbox>
                                            <flexbox-item :span="4">
                                                <div class="flex-box">
                                                    <p>影片名称：{{i.title}}</p>
                                                    <p>影片类型：{{i.genres}}</p>
                                                    <p>影片评分：{{i.rating.average}}</p>
                                                </div>
                                            </flexbox-item>
                                            <flexbox-item>
                                                <div class="flex-box">
                                                    <img :src="i.images.medium">
                                                </div>
                                            </flexbox-item>
                                        </flexbox>
                                    </div>
                                </flexbox-item>
                            </flexbox>

                        </div>
                    </scroller>
                </div>
            </swiper-item>
        </swiper>

    </div>
</template>
<script>
    import {
        XHeader,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        Card,
        Scroller,
        Flexbox,
        FlexboxItem,
        Divider
    } from 'vux'
    export default {
        components: {
            XHeader,
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            Card,
            Scroller,
            Flexbox,
            FlexboxItem,
            Divider
        },
        data() {
            return {
                list: ['Top250', '正在热映', '即将上映'],
                listData: [{}, {}, {}],
                index: 0,
                selected: '正在热映'
            }
        },
        mounted() {
            this.getTopMovie();
            this.getInMovie();
            this.getSoonMovie();
        },
        methods: {
            getTopMovie: function () {
                var self = this;
                // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
                // this.$http.get('/v2/movie/top250').then(function (res) {
                //     self.listData[0] = res
                // })
                $.ajax({
                    url: 'http://api.douban.com/v2/movie/top250',
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.listData[0] = res
                    }
                })
            },
            getInMovie: function () {
                var self = this;
                // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
                // this.$http.get('/v2/movie/in_theaters').then(function (res) {
                //     self.listData[1] = res
                // })
                $.ajax({
                    url: 'http://api.douban.com/v2/movie/in_theaters',
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.listData[1] = res
                    }
                })
            },
            getSoonMovie: function () {
                var self = this;
                // axios没有jsonp，无法在GitHub pages上跨豆瓣的域
                // this.$http.get('/v2/movie/coming_soon').then(function (res) {
                //     self.listData[2] = res
                // })
                $.ajax({
                    url: 'http://api.douban.com/v2/movie/coming_soon',
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.listData[2] = res
                    }
                })
            },
            onScroll(pos) {
                this.scrollTop = pos.top
            },
        }
    }
</script>
<style lang="sass">
    .flex-box {
        text-align: center;
        color: #fff;
        background-color: #20b907;
        border-radius: 4px;
        background-clip: padding-box;
    }
    
    .flex-box-num {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
</style>