<template>
    <div ref="outer" class="split-pane-wrapper">
        <div class="pane pane-left" :style="{ width:  leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${ triggerWidth}px` }"></div>
        <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${ this.triggerWidth / 2 }px` }">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'splitPlane',
    props: {
        // 初始偏移
        value: {
            type: Number,
            default: 0.5
        },
        triggerWidth: {
            type: Number,
            default: 8
        },
        min: {
            type: Number,
            default: 0.1
        },
        max: {
            type: Number,
            default: 0.9
        }
    },
    data () {
        return {
            // value: this.value,
            canMove: false,
            initOffset: 0
        }
    },
    computed: {
        leftOffsetPercent () {
            return `${this.value * 100}%`;
        },
        triggerLeft () {
            return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
        }
    },
    methods: {
        handleClick () {
            if (this.value <= 1) {
                this.value += 0.02;
            } else {
                this.value -= 0.02;
            }
        },
        // 鼠标按下时给鼠标绑定事件
        handleMousedown (event) {
            this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left;
            document.addEventListener('mousemove', this.handleMousemove);
            document.addEventListener('mouseup', this.handleMouseup);
            this.canMove = true;
        },
        handleMouseup () {
            this.canMove = false;
        },
        handleMousemove (event) {
            if(this.canMove) {
                // event.pageX为鼠标距离当前页面左侧的距离
                const outerRect = this.$refs.outer.getBoundingClientRect();
                // console.log(outerRect);
                let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width;
                if (offsetPercent < this.min) {
                    offsetPercent = this.min;
                }
                if (offsetPercent > this.max) {
                    offsetPercent = this.max;
                }
                // this.$emit('input', offsetPercent);
                // update:属性名称
                this.$emit('update:value', offsetPercent);
            }
        }
    }
}
</script>

<style lang="less">
.split-pane-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    .pane {
        position: absolute;
        top: 0;
        height: 100%;
        &-left {
            // width: 30%;
            background: palevioletred;
            z-index: 1;
        }
        &-right {
            right: 0;
            bottom: 0;
            // left: 30%;
            background: palegoldenrod;
            z-index: 1;
        }
        &-trigger-con {
            height: 100%;
            background: red;
            position: absolute;
            top: 0;
            // left: 30%;
            z-index: 2;
            user-select: none;
            cursor: col-resize;
        }
    }
}
</style>
