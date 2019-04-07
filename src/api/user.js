import axios from './index'

export const getJadeInfo = () => {
    return axios.request({
        url: 'http://localhost:8080/test/who',
        method: 'get'
    })
}
