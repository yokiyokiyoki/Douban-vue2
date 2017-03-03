<template>
    <div>
        <scroller lock-x scrollbar-y height="-46" ref="scroller">
            <div>
                <section class="sectionContent">
                    <div class="title clearfix">
                        <div class="title-left">{{list[2]}}</div>
                    </div>
                    <div v-show="comeSpinner" class="spinner">
                        <spinner></spinner>
                    </div>
                    <div class="content clearfix" v-show="comeComplete">
                        <div v-for="item in listData[2]" class="block">
                            <img :src="item.images.medium">
                            <p>{{item.title}}</p> 
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
        // 因为数据已经存储在store里面了，可以直接用
        computed:{
            listData(){
                return this.$store.state.listData;
            },
            sliceListData(){
                return this.$store.state.sliceListData;
            },
            comeComplete(){
                return this.$store.state.comeComplete;
            },
            comeSpinner(){
                return this.$store.state.comeSpinner;
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="sass">
    
</style>