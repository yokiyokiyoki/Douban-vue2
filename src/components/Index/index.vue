<template>
    <div class="container">
        <section-header></section-header>
        <!--路由链接-->

        <!--路由出口-->
        <!-- <router-view></router-view> -->
        
    </div>
</template>
<script>
    
    import SectionHeader from 'components/section/index.vue';
    import headerTitle from 'components/header/index.vue'
    export default {
        components: {
            headerTitle,
            SectionHeader
        },
        data() {
            return {

            }
        }
    }
    
</script>
<style lang="sass">
    /*可以使用变量*/
    
    $black:black;
    $white:white;
    .container {
        /*全局字体*/
        font-family: "Microsoft YaHei", 微软雅黑, Arial, Helvetica, HelveticaNeue, "Helvetica Neue" !important;
    }
    a{
        text-decoration:none;
        color:black;
    }
    /*全局浮动*/
    .clearfix:after, .clearfix:before {
        content: '';
        display: table;
        visibility: hidden;
        height: 0;
        width: 0;
        line-height: 0;
    }
    .clearfix:after {
        clear: both;
    }
    .clearfix {
        zoom: 1;
        *zoom: 1;
    }

</style>