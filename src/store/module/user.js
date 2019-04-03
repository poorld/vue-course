const state = {
    userName: 'Jade'
}

const getters = {
    firstLetter: state => {
        return state.userName.charAt(0);
    }
}

const actions = {

}

const mutations = {

}

export default {
    // namespaced: true, // 模块使用命名空间
    state,
    actions,
    getters,
    mutations
}
