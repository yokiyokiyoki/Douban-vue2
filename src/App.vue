<template>
    <div id="test">
        <h1>hi{{msg}}</h1>
        <span v-for="n in 5">{{n}}</span>
        <img src="../src/assets/img/map.png" alt="图片直接转换成base64编码，减少http请求">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'yoki'
            }
        }
    }
</script>
<style lang="sass">
    /*可以使用变量*/
    
    $red:red;
    #test {
        h1 {
            color: $red
        }
    }
</style>