<template>
    <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="selected === item" v-for="item in list" @click="selected = item">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="100px" :show-dots="false">
            <swiper-item v-for="item in listData">
                <div class="tab-swiper vux-center">
                    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
                        <div class="box2">
                            <flexbox orient="vertical">
                                <flexbox-item>
                                    <div class="flex-box" v-for="i in item.data.subjects">{{i.title}} / {{i.genres}}</div>
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
        FlexboxItem
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
            FlexboxItem
        },
        data() {
            return {
                list: ['Top250', '正在热映', '即将上映'],
                listData: [],
                index: 0,
                selected: '正在热映'
            }
        },
        mounted() {
            this.getTopMovie();
            this.getInMovie();
            this.getSoonMovie();
            console.log(this.listData)
        },
        methods: {
            getTopMovie: function () {
                var self = this;
                this.$http.get('/v2/movie/top250').then(function (res) {
                    self.listData[0] = res
                })
            },
            getInMovie: function () {
                var self = this;
                this.$http.get('/v2/movie/in_theaters').then(function (res) {
                    self.listData[1] = res
                })
            },
            getSoonMovie: function () {
                var self = this;
                this.$http.get('/v2/movie/coming_soon').then(function (res) {
                    self.listData[2] = res
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
</style>