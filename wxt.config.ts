import {defineConfig} from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
    modules: ['@wxt-dev/module-vue'],
    manifest: {
        permissions: ["storage", "tabs", "activeTab", "webRequest"],
        host_permissions: ["http://localhost:8888/*"]
    },
});
