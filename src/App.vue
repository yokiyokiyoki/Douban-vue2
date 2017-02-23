<template>
    <div id="test">
        <x-header>Yoki</x-header>
        <p>hi{{msg}}</p>
        <!--路由链接-->
        <router-link to="/page">go to page</router-link>
        <!--路由出口-->
        <router-view></router-view>
    </div>
</template>
<script>
    import {
        XHeader
    } from 'vux'
    export default {
        components: {
            XHeader
        },
        data() {
            return {
                msg: 'yoki'
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