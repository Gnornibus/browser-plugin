import { createApp } from "vue";
// @ts-ignore
import LoveJuejin from "@/components/LoveJuejin.vue";

export default defineContentScript({
  matches: ["<all_urls>"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "#juejin",
      onMount: (container) => {
        const app = createApp(LoveJuejin);
        app.mount(container);
        return app;
      },
      onRemove: (app) => {
        if (app) {
          app.unmount();
        }
      },
    });
    ui.mount();
    // 监听消息：content_script
    window.addEventListener('message', (e) => {
      console.log('e:', e)
      console.log('e.data:', e?.data)
      console.log('e.data.type:', e?.data?.type)
      console.log('e.data.data:', e?.data?.data)

      if (e?.data?.type === 'my-message-type') {
        // do something
      }
    })
  },
});
