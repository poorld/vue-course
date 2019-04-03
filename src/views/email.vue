<template>
    <div style="border: 1px solid green">
        <button @click="handleClick">email: 456465464</button>
    </div>
</template>

<script>
export default {
    mounted () {
        console.log(this.$bus);
    },
    methods: {
        handleClick () {
            this.$bus.$emit('on-click', 'hello');
        }
    }
}
</script>
