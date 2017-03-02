<template>
    <div>
        <scroller lock-x scrollbar-y height="-46" ref="scroller"  @on-scroll="onScroll">
            <content-box></content-box>
         </scroller>   
    </div>
</template>
<script>
    import {
        Scroller
    } from 'vux'
    import contentBox from './content.vue'
    export default {
        components: {
            Scroller,
            contentBox
        },
        data() {
            return {
                
            }
        },
        
        methods: {
            onScroll(pos) {
                this.scrollTop = pos.top
            },
        }
    }
</script>
<style lang="sass">
    
    
</style>