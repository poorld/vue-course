import axios from './index'

export const getJadeInfo = ({ userId }) => {
    return axios.request({
        url: '/test/who',
        method: 'get',
        data: {
            userId
        }
    })
}
