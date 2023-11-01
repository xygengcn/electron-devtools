import { createPreloadHandle } from "chrome-extension-ipc/preload";

console.log("[fs-devtools-preload] start");

// 创建
window.$devtoolsPreloadHandle = createPreloadHandle({ noconsole: false });

// 注册能力
window.$devtoolsPreloadHandle.use("add", ({ a, b }) => {
  console.log("接收到插件参数：", { a, b });
  return a + b;
});
