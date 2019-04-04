import vue from 'vue'

const mutation = {
    /**
     * 多个值可以将params设为一个对象
     * @param {*} state
     * @param {*} params
     */
    SET_APP_NAME (state, { appName }) {
        state.appName = appName;
    },
    SET_APP_VERSION (state) {
        vue.set(state, 'appVersion', 'v2.0');
    }
}
export default mutation;
