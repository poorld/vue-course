import Home from '@/views/Home.vue'

/**
 * 路由匹配按下述顺序进行
 */
export default [
    {
        path: '/',
        name: 'home',
        // 别名
        alias: '/home_page',
        component: Home,
        props: route => {
            // 函数模式
            return {
                food: route.query.food // 此时路径需要这样写http://localhost:8080/#/?food=banana
            }
        },
        // 独享守卫
        // beforeEnter: (to, from, next) => {
        //     if(from.name === 'about') {
        //         alert('来自about页');
        //     } else {
        //         alert('这不是从about页来的')
        //     }
        //     next();
        // }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        props: {// 对象模式 传参
            food: 'banana'
        },
        meta: {
            title: '关于'
        }
    },
    {
        path: '/count-to',
        name: 'count-to',
        component: () => import('../../src/views/count-to.vue')

    },
    // 动态路由匹配
    {

        name: 'argu',
        path: '/argu/:name', // name是一个动态路由参数
        component: () => import('@/views/argu.vue'),
        props: true // 使用参数作为组件的属性传入
    },
    // 嵌套路由
    {
        path: '/parent',
        name: 'parent',
        component: () => import('@/views/parent.vue'),
        children: [
            {
                path: 'child/:name',
                component: () => import('@/views/child.vue')
            }
        ]
    },
    {
        // 命名视图
        path: '/name_view',
        components: {
            default: () => import('@/views/child.vue'),
            email: () => import('@/views/email.vue'),
            tel: () => import('@/views/tel.vue')
        }
    },
    {
        // 重定向
        path: '/main',
        // redirect: {
        //     name: 'home'
        // }
        redirect: to => {
            // return {
            //     name: 'home'
            // }
            return '/'
        }
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('@/views/store.vue')
    },
    {
        path: '*',
        component: () => import('@/views/error_404.vue')
    }
]
