'use strict';

var createContentScript = function(e){const t=e&&e.noconsole;if(!t&&console.log("[devtools-content-script] 开始注入脚本",e),!t&&console.log("[devtools-content-script] 开始监听数据传输"),window.addEventListener("message",(e=>{const o=e.data;if("message"===e.type&&"content-script"===o.route&&window.chrome.runtime){const e={...o,route:"service-worker",track:[...o.track,"content-script"]};!t&&console.log("[devtools-content-script] 数据传输到service-worker",e),window.chrome.runtime.sendMessage(e);}})),e.preloadUrl&&"string"==typeof e.preloadUrl){const o=document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src",window.chrome.runtime.getURL(e.preloadUrl)),document.documentElement.appendChild(o),o.addEventListener("load",(()=>{!t&&console.log("[devtools-content-script] 加载完preload",e.preloadUrl);})),o.addEventListener("error",(o=>{!t&&console.log("[devtools-content-script] 加载preload失败",e.preloadUrl,o);}));}};

console.log("[fs-devtools-content-script] start");
// web_accessible_resources 备注
createContentScript({ preloadUrl: "preload.js", noconsole: false });
