<template>
    <div id="test">
        <h1>hi{{msg}}</h1>
        <span v-for="n in 5">{{n}}</span>
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
    $red:red;
    #test {
        h1 {
            color: $red
        }
    }
</style>