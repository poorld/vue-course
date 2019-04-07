<template>
    <div class="split-pane-con">
        <!-- sync可以绑定多个值，v-model只可以一个 -->
        <split-pane :value.sync="offset">
            <div slot="left">left</div>
            <div slot="right">right</div>
        </split-pane>
    </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
    components: {
        SplitPane
    },
    data () {
        return {
            offset: 0.1
        }
    },
    methods: {
        handleInput (value) {
            this.offset = value;
        }
    }
}
</script>

<style>
.split-pane-con {
    width: 400px;
    height: 200px;
    background: palegoldenrod;
    margin: 0 auto;
}
</style>
