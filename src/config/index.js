export const baseUrl = process.env.NODE_ENV === 'production'
    ? 'http://production.com'
    : 'http://localhost:8080' // 设置了代理就空字符串 否则就写服务端的url
