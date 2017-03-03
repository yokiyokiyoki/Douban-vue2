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
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                        <img :src="item.images.medium">
                        <p>{{item.title}}</p>
                    </router-link> 
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
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                        <img :src="item.images.medium">
                        <p>{{item.title}}</p>
                    </router-link>  
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
                    <router-link :to="{name:'detail',params:{id:item.id}}">
                        <img :src="item.images.medium">
                        <p>{{item.title}}</p>
                    </router-link>     
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
                index: 0,
                selected: '正在热映',
            }
        },
        computed:{
            // main.js里面注入store后，可以在子组件使用this.$store
            listData(){
                return this.$store.state.listData;
            },
            sliceListData(){
                return this.$store.state.sliceListData;
            },
            topComplete(){
                return this.$store.state.topComplete;
            },
            topSpinner(){
                return this.$store.state.topSpinner;
            },
            inComplete(){
                return this.$store.state.inComplete;
            },
            inSpinner(){
                return this.$store.state.inSpinner;
            },
            comeComplete(){
                return this.$store.state.comeComplete;
            },
            comeSpinner(){
                return this.$store.state.comeSpinner;
            },
        },
        components:{
            Spinner
        },
        mounted() {
            // 通过dispatch触发store里的异步action
            // 在这里初始化store数据，后面的数据引入，省去多次请求
            this.$store.dispatch('getTopMovie');
            this.$store.dispatch('getInMovie');
            this.$store.dispatch('getSoonMovie');
        },
        methods:{
            
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
                height:200px;
                p{
                    font-size:12px;
                }
            }
        }
    }    
</style>