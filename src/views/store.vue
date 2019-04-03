<template>
    <div>
        <a-input @input="handleInput"/>
        <p>{{ value }}</p>
        <a-show :content="value"></a-show>
    </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

export default {
    components: {
        AInput,
        AShow
    },
    data () {
        return {
            value: ''
        }
    },
    methods: {
        handleInput (val) {
            this.value = val;
        }
    }
}
</script>
