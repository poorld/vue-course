<template>
    <div style="border: 1px solid red">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    mounted () {
        this.$bus.$on('on-click', mes => {
            this.message = mes;
        })
    }
}
</script>
