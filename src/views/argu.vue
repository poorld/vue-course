<template>
    <div>
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'jade'
        }
    },
    // url路由发生变化，组件被复用时调用
    beforeRouteUpdate (to, from, next) {
        // 组件被复用时该页面是渲染好的可以使用this
        console.log(to.name, from.name);
    }
}
</script>

<style>

</style>
