import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import user from './module/user'
import getters from './getters'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
    // 严格模式,开启后再组件内使用state的方式而不是以mutation的方式去修改state的值时会报错
    strict: process.env.NODE_ENV === 'development',
    state,
    mutations,
    actions,
    getters,
    modules: {
        user
    },
    plugins: [
        saveInLocal
    ]
})
