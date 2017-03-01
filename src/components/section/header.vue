<template>
    <div>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="selected === item" v-for="item in list" @click="selected = item">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="100px" :show-dots="false">
            <swiper-item v-for="item in list">
                <div class="tab-swiper vux-center">我是{{item}}的容器 </div>
            </swiper-item>
        </swiper>
        <card :header="{title:'启动特权礼包'}">
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-l vux-1px-r">
                    <span>金币*1130</span>
                    <br/> 签到礼包
                </div>
                <div class="vux-1px-r">
                    <span>结算+3%</span>
                    <br/> 金币加成
                </div>
                <div>
                    <span>微信身份展示</span>
                    <br/> 外显特权
                </div>

            </div>
        </card>
    </div>
</template>
<script>
    import {
        XHeader,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        Card
    } from 'vux'
    export default {
        components: {
            XHeader,
            Tab,
            TabItem,
            Swiper,
            SwiperItem,
            Card
        },
        data() {
            return {
                list: ['读书', '电影', '音乐'],
                index: 0,
                selected: '美食'
            }
        },
        mounted() {
            this.getBook();
        },
        methods: {
            getBook: function () {
                this.$http.get('https://api.douban.com/v2/book/1220562').then(function (res) {
                    console.log(res)
                })
            }
        }
    }
</script>
<style lang="sass">
    .card-demo-flex {
        display: flex;
    }
    
    .card-demo-content01 {
        padding: 10px 0;
    }
    
    .card-padding {
        padding: 15px;
    }
    
    .card-demo-flex>div {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    
    .card-demo-flex span {
        color: #f74c31;
    }
</style>