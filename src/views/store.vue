<template>
    <div>
        <a-input @input="handleInput"/>
        <a-show :content="value"></a-show>
        <p>{{ inputValueLastLetter }}</p>
        <p>{{ appName }}</p>
        <p>{{ userName }} -> {{ firstLetter }}</p>
        <p>{{ appNameWithVersion }}</p>
    </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// 获取vuex状态值的另一个方法
import { mapState, mapGetters } from 'vuex'

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
    },
    computed: {
        // appName () {
        //     return this.$store.state.appName;
        // },
        // userName () {
        //     return this.$store.state.user.userName;
        // }
        // ...展开操作符，将一个对象扁平化引入computed对象
        // ...mapState([
        //     'appName'
        // ])
        ...mapState ({
            appName: state => state.appName,
            userName: state => state.user.userName
        }),
        ...mapGetters([
            'appNameWithVersion',
            'firstLetter'
        ]),
        // appNameWithVersion () {
        //     return this.$store.getters.appNameWithVersion;
        // },
        inputValueLastLetter () {
            // 返回value的最后一个字符
            return this.value.charAt(this.value.length - 1);
        }
    },
}
</script>
