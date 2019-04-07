<template>
    <div>
        <slot name="left"></slot><span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
    </div>
</template>

<script>
import CountUp from 'countup'
import './count-to.less'

export default {
    name: 'count_to',
    props: {
        /**
         * @description 起始值
         */
        startValue: {
            type: Number,
            default: 0
        },
        /**
         * @description 最终值
         */
        endVal: {
            type: Number,
            required: true
        },
        /**
         * @description 小数点后保留几位小数
         */
        decimals: {
            type: Number,
            default: 0
        },
        /**
         * @description 单位毫秒，动画延迟开始时间
         */
        delay: {
            type: Number,
            default: 0
        },
        /**
         * @description 渐变时长
         */
        duration: {
            type: Number,
            default: 2
        },
        /**
         * @description 是否使用变速效果
         */
        useEasing: {
            type: Boolean,
            default: false
        },
        /**
         * @description 是否使用数值分组 如 1,111
         */
        useGrouping: {
            type: Boolean,
            default: true
        },
        /**
         * @description 分组符号
         */
        seperator: {
            type: String,
            default: ','
        },
        /**
         * @description 整数与小数分隔的符号
         */
        decimal: {
            type: String,
            default: '.'
        },
        className: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            counter: {}
        }
    },
    computed: {
        eleId () {
            // 每一个vue实例的_uid都不同
            return `count_up_${this._uid}`
        },
        countClass () {
            return [
                'count-to-number',
                this.className
            ]
        }
    },
    watch: {
        endVal (newVal, oldVal) {
            this.counter.update(newVal);
            this.emitEndEvent();
        }
    },
    methods: {
        getCount () {
            console.log(this.$refs.number);
            return this.$refs.number;
        },
        emitEndEvent () {
            setTimeout(() => {
                // 动画结束，返回最终的值
                this.$emit('on-animation-end', Number(this.getCount().innerText));
            }, this.duration * 1000 + 5);
        }
    },
    mounted () {
        this.$nextTick(() => {
            // 创建countUp
            // 参数 元素id，
            this.counter = new CountUp(this.eleId, this.startValue, this.endVal, this.decimals, this.duration, {
                useEasing: this.useEasing,
                useGrouping: this.useGrouping,
                seperator: this.seperator,
                decimal: this.decimal
            });
            setTimeout(() => {
                this.counter.start()
            }, this.delay);
        })
        this.emitEndEvent();
    }
}
</script>

<style>
</style>
