// background.ts
export default defineBackground(() => {
    // 定义存储项
    const count = storage.defineItem<number>("local:count", {
        defaultValue: 0,
    });

    // 每秒计数并存储
    setInterval(async () => {
        const _count = await count.getValue();
        console.log(_count);
        storage.setItem("local:count", _count + 1);
    }, 1000);

    // 监听来自前端页面的消息
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.cmd === 'sendUrl') {
            fetch(`http://localhost:8888/system-admin/google-operation/before-operation?spreadsheetId=${encodeURIComponent(request.url)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => sendResponse({ success: true, data }))
                .catch(error => sendResponse({ success: false, error }));
            console.log('Received message:', request.value); // 输出接收到的消息
            sendResponse({res: 'bg_to_content'}); // 返回响应给发送消息的脚本
        }
    });
});
