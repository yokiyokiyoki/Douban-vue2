<template>
    <div>
        <div v-show="loading" class="spinner">
            <spinner></spinner>
        </div>
        <div class="content clearfix" v-show="complete">
            <div  class="block">
                <p>{{detailData.countries}}</p> 
                <p>{{detailData.title}}</p> 
                <p>{{detailData.genres}}</p>
                <p>{{detailData.summary}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {Spinner} from 'vux'
    export default{
        components:{
            Spinner
        },
        data(){
            return{
                loading:true,
                complete:false,
                detailData:{}
            }
        },
        mounted(){
            console.log(this.$route.params)
            
            this.getDetail();
        },
        methods:{
            getDetail:function(){
                let self=this;
                $.ajax({
                    url: 'https://api.douban.com/v2/movie/subject/'+self.$route.params.id,
                    dataType: 'jsonp',
                    type: 'get',
                    success: function (res) {
                        self.detailData=res;
                        self.complete=true;
                        self.loading=false;
                        console.log(res)
                    }
                })
            }
        }
    }
</script>
<style lang="sass">
    
</style>
