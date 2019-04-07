// 数据本地存储插件
export default store => {
    if(sessionStorage.state) {
        store.replaceState(JSON.parse(sessionStorage.state));
    }
    // subscribe 当你每次提交(commit)mutation后都会执行里面的回调函数
    store.subscribe((mutation, state) => {
        //
        sessionStorage.state = JSON.stringify(state);
    })
}
