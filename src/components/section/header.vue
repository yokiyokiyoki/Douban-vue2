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
    </div>
</template>
<script>
    import {
        XHeader,
        Tab,
        TabItem,
        Swiper,
        SwiperItem
    } from 'vux'
    export default {
        components: {
            XHeader,
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        data() {
            return {
                list: ['美食', '电影', '酒店'],
                index: 0,
                selected: '美食'
            }
        }
    }
</script>
<style lang="sass">
    /*可以使用变量*/
    
    $black:black;
    $white:white;
    #test {
        p {
            color: $black;
        }
    }
</style>