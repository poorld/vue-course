import Mock from 'mockjs'
import { getUserInfo } from './response/user'

/**
 * 参数有 url, http方法（可选），响应的方法
 */
// Mock.mock('http://localhost:8080/test/who', getUserInfo);
// 正则
Mock.mock(/\/who/, 'get', getUserInfo);
// 600毫秒响应
// Mock.setup({
//     timeout: 600
// })

export default Mock
