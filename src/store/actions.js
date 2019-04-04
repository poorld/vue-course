import { getAppName } from '@/api/app'

const actions = {
    /**
     * 调用commit去调用一个mutation
     * @param {*} param
     */
    // updateAppName ({ commit }, params) {
    //     getAppName().then(res => {
    //         console.log(JSON.stringify(res));
    //         const { info: { appName } } = res;
    //         // console.log(param)
    //         commit('SET_APP_NAME', { appName: appName + ' ' + params.join('-') });
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    async updateAppName ({ commit }) {
        // 这种同步方式处理错误，使用try catch
        try {
            const { info: { appName } } = await getAppName();
            commit('SET_APP_NAME', { appName });
        } catch (err) {
            console.log(err);
        }
    }
}

export default actions
