import axios from 'axios'
import { baseURL } from '@/config'

// 封装axios
class HttpRequest {
    // 必须的方法
    constructor (baseUrl = baseURL) {
        this.baseUrl = baseUrl;
        this.queue = {}; // 一个队列
    }
    /**
     * 返回内部的配置
     */
    getInsideConfig () {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                //
            }
        }
        return config;
    }
    /**
     * 请求拦截方法
     * @param {*} instance
     */
    interceptors (instance, url) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            // 可以使用iview的Spin.show()
            if (!Object.keys(this.queue).length) {
                // 当长度等于0 及返回false就使用Spin.show()
            }
            this.queue[url] = true;
            return config; // 返回config使得请求能够继续
        }, error => {
            return Promise.reject(error);
        })
        // 响应拦截 及服务端返回时的拦截
        instance.interceptors.response.use(res => {
            console.log(`响应拦截 ${JSON.stringify(res)}`);
            // 成功响应了就从队列中去除该url
            delete this.queue[url];
            const { data, status } = res;
            return { data, status };
        }, error => {
            delete this.queue[url];
            return Promise.reject(error);
        })
    }
    /**
     * 创建并调用请求
     * @param {*} options
     */
    request (options) {
        // axios实例
        const instance = axios.create();
        // 如果有相同的属性名 它会使用后边的对象的属性进行覆盖
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}

export default HttpRequest
