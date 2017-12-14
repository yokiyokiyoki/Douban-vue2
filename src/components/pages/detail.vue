<template>
    <div>
        <div v-show="loading" class="spinner">
            <spinner></spinner>
        </div>
        <div class="content clearfix" v-show="complete">
            <div class="block flex-center">
                <h4>{{detailData.title}}</h4>
                <img :src="detailData.img">
                <h4>导演</h4>
                <p v-for="directors in detailData.directors" >{{directors.name}}</p>
                <h4>制片国家/地区</h4>
                <p v-for="country in detailData.countries">{{country}}</p> 
                <h4>类型</h4>
                <p v-for="genres in detailData.genres">{{genres}}</p> 
                <h4>{{detailData.title}}的剧情介绍</h4>
                <p>{{detailData.summary}}</p>
                <h4>影片评分</h4>
                <p>{{detailData.average}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import { Spinner } from "vux";
    export default {
      components: {
        Spinner
      },
      data() {
        return {
          loading: true,
          complete: false,
          detailData: {}
        };
      },
      created() {
        this.getDetail();
      },
      mounted() {
        console.log(this.$route.params);
      },
      methods: {
        getDetail: function() {
          let self = this;
          $.ajax({
            url: "https://api.douban.com/v2/movie/subject/" + self.$route.params.id,
            dataType: "jsonp",
            type: "get",
            success: function(res) {
              self.detailData = res;
              // 强行赋值给一个属性,发现两个嵌套属性在模板里会找不到
              self.detailData.img = res.images.large;
              self.detailData.average = res.rating.average;
              self.detailData.directors = res.directors;
              self.complete = true;
              self.loading = false;
            }
          });
        }
      }
    };
</script>
<style lang="sass">
    .spinner{
        height:300px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .block{
        flex-direction:column;
        p{
            font-size:14px
        }
    }
</style>
