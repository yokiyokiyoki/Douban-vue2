<template>
    <div>
        <scroller lock-x scrollbar-y height="-46" ref="scroller">
            <div>
                <section class="sectionContent">
                    <div class="title clearfix">
                        <div class="title-left">{{list[0]}}</div>
                    </div>
                    <div v-show="topSpinner" class="spinner">
                        <spinner></spinner>
                    </div>
                    <div class="content clearfix" v-show="topComplete">
                        <div v-for="item in listData[0]" class="block">
                            <router-link :to="{name:'detail',params:{id:item.id}}">
                                <img :src="item.images.medium">
                                <p>{{item.title}}</p>
                            </router-link>  
                        </div>
                    </div>
                </section>
            </div>
        </scroller>
     </div>
</template>
<script>
    import headerTitle from 'components/header/index.vue'
    import {Scroller,Spinner} from 'vux'
    export default{
        data(){
            return{
                list: ['Top250', '正在热映', '即将上映']
            }
        },
        components:{
            headerTitle,
            Scroller,
            Spinner
        },
        mounted() {
            
        },
        methods:{
            
        },
        computed:{
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
            }
            
        }
    }
</script>
<style lang="sass">
    
</style>