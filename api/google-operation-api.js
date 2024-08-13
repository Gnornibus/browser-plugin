import request from '/common/utils/request'

let BaseUrl = "/google-operation"

/**
 * 谷歌电子表格表运算逻辑
 * @returns {*}
 */
export function beforeOperation() {
    return request({
        url: BaseUrl + '/before-operation',
        method: 'get'
    })
}
