<template>
    <div>
        <scroller lock-x scrollbar-y height="-46" ref="scroller">
            <div>
                <section class="sectionContent">
                    <div class="title clearfix">
                        <div class="title-left">{{list[1]}}</div>
                    </div>
                    <div v-show="inSpinner" class="spinner">
                        <spinner></spinner>
                    </div>
                    <div class="content clearfix" v-show="inComplete">
                        <div v-for="item in listData[1]" class="block">
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
        methods:{
           
        },
        computed:{
            listData(){
                return this.$store.state.listData;
            },
            sliceListData(){
                return this.$store.state.sliceListData;
            },
            inComplete(){
                return this.$store.state.inComplete;
            },
            inSpinner(){
                return this.$store.state.inSpinner;
            }
        }
    }
</script>
<style lang="sass">
    
</style>