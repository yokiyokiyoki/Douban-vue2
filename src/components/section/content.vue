<template>
    <div>
        <section class="sectionContent">
            <div class="title clearfix">
                <div class="title-left">{{list[0]}}</div>
                <router-link to="/view/top250" class="view-more" >更多>></router-link>
            </div>
            <div v-show="topSpinner" class="spinner">
                <spinner></spinner>
            </div>
            <div class="content clearfix" v-show="topComplete">
                <div v-for="item in sliceListData[0]" class="block">
                    <img :src="item.images.medium">
                    <p>{{item.title}}</p> 
                </div>
            </div>
        </section>
        <section class="sectionContent">
            <div class="title clearfix">
                <div class="title-left">{{list[1]}}</div>
                 <router-link to="/view/in_theaters" class="view-more" >更多>></router-link>
            </div>
            <div v-show="inSpinner" class="spinner">
                <spinner></spinner>
            </div>
            <div class="content clearfix" v-show="inComplete">
                <div v-for="item in sliceListData[1]" class="block">
                    <img :src="item.images.medium">
                    <p>{{item.title}}</p> 
                </div>
            </div>
        </section>
        <section class="sectionContent">
            <div class="title clearfix">
                <div class="title-left">{{list[2]}}</div>
                 <router-link to="/view/coming_soon" class="view-more" >更多>></router-link>
            </div>
            <div v-show="comeSpinner" class="spinner">
                <spinner></spinner>
            </div>
            <div class="content clearfix" v-show="comeComplete">
                <div v-for="item in sliceListData[2]" class="block">
                    <img :src="item.images.medium">
                    <p>{{item.title}}</p> 
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import {
        Spinner
    } from 'vux'
    export default{
        data(){
            return{
                list: ['Top250', '正在热映', '即将上映'],
                listData: [{}, {}, {}],
                sliceListData:[{},{},{}],
                index: 0,
                selected: '正在热映',
                topComplete:false,
                topSpinner:true,
                inComplete:false,
                inSpinner:true,
                comeComplete:false,
                comeSpinner:true
            }
        },
        components:{
            Spinner
        },
        mounted() {
            this.getTopMovie();
            this.getInMovie();
            this.getSoonMovie();
        },
        methods:{
            getTopMovie: function () {
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
                        self.listData[0] = res.subjects;
                        self.sliceListData[0] = res.subjects.slice(0,6);
                        self.topComplete=true;
                        self.topSpinner=false;
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
                    url: 'https://api.douban.com/v2/movie/in_theaters',
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.listData[1] = res.subjects;
                        self.sliceListData[1] = res.subjects.slice(0,6);
                        self.inComplete=true;
                        self.inSpinner=false;
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
                    url: 'https://api.douban.com/v2/movie/coming_soon',
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.listData[2] = res.subjects;
                        self.sliceListData[2] = res.subjects.slice(0,6);
                        self.comeComplete=true;
                        self.comeSpinner=false;
                    }
                })
            },
        }
    }
</script>
<style lang="sass">
    .sectionContent{
        margin-top:10px;
        .title{
            .title-left{
                float:left
            }
            .view-more{
                float:right;
            }
        }
        .spinner{
            display:flex;
            justify-content: center;
            align-items:center;
            height:300px;
        }
        .content{
            width:100%;
            margin-top:10px;
            .block{
                float:left;
                width:33%;
                display:flex;
                justify-content: center;
                align-items:center;
                flex-direction:column;
                p{
                    font-size:12px;
                }
            }
        }
    }    
</style>