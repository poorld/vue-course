<template>
    <div>
        <count-to @on-animation-end="handleOnAnimationEnd" ref="countTo" :end-val="endVal">
            <span slot="left">金额: $</span>
            <span slot="right"> per week</span>
        </count-to>
        <button @click="getNumber">获取数值</button>
        <button @click="updateNumber">更新</button>
    </div>
</template>

<script>
import CountTo from '@/components/count-to'

export default {
    components: {
        CountTo
    },
    name: 'count_to',
    data () {
        return {
            endVal: 100
        }
    },
    methods: {
        getNumber () {
            console.log(Number(this.$refs.countTo.getCount().innerText));
        },
        updateNumber () {
            this.endVal += Math.floor(Math.random() * 100);
        },
        handleOnAnimationEnd (endVal) {
            console.log(`c ${endVal}`);
        }
    }
}
</script>
