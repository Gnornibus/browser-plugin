import request from '/common/utils/request'

let BaseUrl = "/uaa-admin"

/**
 * 获取验证码
 * @returns {*}
 */
export function check() {
    return request({
        url: BaseUrl + '/check',
        method: 'get'
    })
}

/**
 * 用户登录
 * @param data 登录信息
 * @param header 头部信息
 * @returns {*}
 */
export function login(data, header) {
    return request({
        url: BaseUrl + '/login',
        method: 'post',
        data: data,
        headers: header,
    })
}

/**
 * 获取用户详情
 * @returns {*}
 */
export function getInfo() {
    return request({
        url: BaseUrl + '/selectInfo',
        method: 'get',
    })
}

/**
 * 退出登录
 * @returns {*}
 */
export function loginOut() {
    return request({
        url: BaseUrl + '/loginOut',
        method: 'post'
    })
}

/**
 * 重置密码
 * @returns {*}
 */
export function resetPwd(userId) {
    return request({
        url: BaseUrl + '/resetPwd',
        method: 'get',
        params: userId,
    })
}

/**
 * 修改密码
 * @returns {*}
 */
export function modifyPwd(data) {
    return request({
        url: BaseUrl + '/modifyPwd',
        method: 'post',
        data: data,
    })
}

/**
 * 列表
 * @param data
 * @returns {*}
 */
export function getListSysUser(data) {
    return request({
        url: BaseUrl + '/page',
        method: 'post',
        data: data,
    })
}

/**
 * 创建/修改
 * @returns {*}
 * @param data
 */
export function saveSysUser(data) {
    return request({
        url: BaseUrl + '/save',
        method: 'post',
        data: data,
    })
}

/**
 * 删除
 * @returns {*}
 * @param params
 */
export function deleteSysUser(params) {
    return request({
        url: BaseUrl + '/delete',
        method: 'delete',
        params: params,
    })
}

/**
 * 查找
 * @returns {*}
 * @param params
 */
export function selectSysUser(params) {
    return request({
        url: BaseUrl + '/select',
        method: 'get',
        params: params,
    })
}
