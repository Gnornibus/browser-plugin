import { ElLoading } from 'element-plus'

let needLoadingRequestCount = 0
let loadingInstance

/**
 * 开始加载动画
 */
function startLoading() {
    loadingInstance = ElLoading.service({
        lock: true,
        text: '正在加载中，请稍候！',
        background: 'rgba(0, 0, 0, 0)'
    })
}

/**
 * 结束加载动画
 */
function endLoading() {
    loadingInstance.close()
}

/**
 * 尝试关闭加载动画
 */
function tryCloseLoading() {
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

/**
 * 显示全屏加载动画
 */
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

/**
 * 尝试隐藏全屏加载动画
 */
export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        tryCloseLoading()
    }
}
