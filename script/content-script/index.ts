import { createContentScript } from "chrome-extension-ipc/content-script";

console.log("[fs-devtools-content-script] start");

// web_accessible_resources 备注
createContentScript({ preloadUrl: "preload.js", noconsole: false });
