<template>
  <div class="home">
    <h1>{{ food }}</h1>
    <div>
        <img :src="url" alt="">
        <img :src="url64" alt="">
    </div>
    <button @click="handleClick">返回上一页</button>
    <button @click="push">push</button>
    <button @click="replace">替换</button>
    <button @click="handleInfo" :style="{ backgroundColor: color}">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getJadeInfo } from '@/api/user.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
      food: {
          type: String,
          default: 'apple'
      }
  },
  data () {
      return {
          url: '',
          url64: '',
          color: ''
      }
  },
    beforeRouteEnter (to, from, next) {
        // 无法获取 this实例，它在页面渲染前调用的
        //   console.log(to.name);
        //   next();

        // 可以这样用
        next(vm => {
            console.log(vm);
        })
    },
    beforeRouteLeave (to, from, next) {
        // const leave = confirm('您确定要离开吗?');
        const leave = true;
        if(leave) {
            next()
        } else {
            next(false);
        }
    },
    methods: {
        handleInfo () {
            getJadeInfo({ userId: 23 }).then(res => {
                this.url = res.data.image;
                this.url64 = res.data.img_base64;
                this.color = res.data.color;
                console.log(res.data);
            });
        },
         handleClick () {
            // 返回上一页
            // this.$router.go(-1);
            this.$router.back();
        },
         push() {
            // this.$router.push('/parent')
            const name = 'jade';
            this.$router.push({
                // 第一种
                // name,
                // params: {
                //     name: 'jade'
                // }
                // 第二种
                path: `/argu/${name}`
            })
        },
        replace() {
            // 替换会同时替换历史路由
            this.$router.replace({
                name: 'parent',
                // query: {
                //     name: 'jade' // url 会变成http://localhost:8080/#/parent?name=jade
                // }
            })
        }
    }
}
</script>

<style>
</style>
