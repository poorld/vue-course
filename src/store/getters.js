const getters = {
    // 获取的值依赖于state中appName计算的
    appNameWithVersion: (state) => {
        return state.appName + 'v2.0';
    }
}
export default getters;
