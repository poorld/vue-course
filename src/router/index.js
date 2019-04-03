import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/utils'

Vue.use(Router)

const router = new Router({
    routes
});

/**
 * 全局守卫
 * to 前往的页面
 * from 离开的页面，
 * next 是一个函数，确认前往就调用
 */
const HAS_LOGINED = true;
router.beforeEach((to, from, next) => {
    if(to.meta) {
        setTitle(to.meta.title);
    }
    if (to.name !== 'login') {
        if(HAS_LOGINED) {
            // 已登录
            next();
        } else {
            // 未登录
            next({
                name: 'login'
            })
        }
    } else {
        // 当前情况是用户手动输入url前往登录页面
        if(HAS_LOGINED) {
            // 已登录
            next({ name: 'home' });
        } else {
            // 未登录直接前往登录页面
            next()
        }
    }
});

/**
 * 导航被确认之前（导航被确认：导航钩子都结束）异步路由组件被解析之后就会触发当前钩子
 */
// router.beforeResolve((to, from, next) => {})

router.afterEach((to, from) => {
    // logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用组件里调用 beforeRouteUpdate
 * 5. 调用路由独享守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve 导航被确认之前异步路由组件解析之后调用
 * 9. 导航确认
 * 10. 调用全局的afterEach 后置守卫
 * 11. 触发dom的更新渲染
 * 12. 用创建好的实例调用beforeRouterEnter守卫里给next的函数
 */
export default router
