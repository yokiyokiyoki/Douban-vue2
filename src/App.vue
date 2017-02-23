<template>
    <div id="test">
        <x-header>Yoki</x-header>
        <section-header></section-header>
        <p>hi{{msg}}</p>
        <!--路由链接-->

        <!--路由出口-->
        <router-view></router-view>
    </div>
</template>
<script>
    import {
        XHeader
    } from 'vux';
    import SectionHeader from './components/section/header.vue'
    export default {
        components: {
            XHeader,
            SectionHeader
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