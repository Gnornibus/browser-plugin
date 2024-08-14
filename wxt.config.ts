import {defineConfig} from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    modules: ['@wxt-dev/module-vue'],
    manifest: {
        permissions: [
            "scripting",
            "tabs",
            "activeTab",
            "webRequest",
            "storage",
            "declarativeNetRequest",
            "declarativeNetRequestWithHostAccess",
            "declarativeNetRequestFeedback"],
        host_permissions: ["http://localhost:8888/*"]
    },
});
