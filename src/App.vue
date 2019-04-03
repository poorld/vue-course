<template>
  <div id="app">
    <div id="nav">
        <!-- 命名路由 -->
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group :name="routerTransition">
        <router-view key="default"/>
        <!-- 命名视图 -->
        <router-view name="email" key="email"/>
        <router-view name="tel" key="tel"/>
    </transition-group>
  </div>
</template>

<script>
export default {
    data () {
        return {
            routerTransition: 'router'
        }
    },
    watch: {
        // 对象深度监听
        '$route' (to) {
            // 此时设置动态效果需要这样写url http://localhost:8080/#/about?transitionName=router
            if(to.query && to.query.transitionName) {
                this.routerTransition = to.query.transitionName;
            }
        }
    }
}
</script>


<style lang="less">
.router-enter {
    // 页面未显示
    opacity: 0;
}
.router-enter-active {
    // 从无到有
    transition: opacity 1s ease;
}
.router-enter-to {
    opacity: 1;
}
.router-leave {
    //
    opacity: 1;
}
.router-leave-active {
    //
    transition: opacity 1s ease;
}
.router-leave-to {
    opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
