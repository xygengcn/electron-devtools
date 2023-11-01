'use strict';

var createPreloadHandle;
function o(o){window.postMessage({requestId:"",...o,route:"content-script",source:"app",target:"panel",track:["preload"]});}class e{actionMap=new Map;option={};constructor(o){this.option=o||{};}get(o){return this.actionMap.get(o)}invoke(e,t,n){!this.option.noconsole&&console.log("[devtools-preload] invoke主动触发",e,t),o({action:e,data:{result:t||void 0,error:n||null}});}use(o,e){!this.option.noconsole&&console.log("[devtools-preload] 注册函数接口",o,typeof e),o&&"function"==typeof e&&this.actionMap.set(o,e);}}createPreloadHandle = function(t){const n=t&&t.noconsole;!n&&console.log("[devtools-preload] createPreloadHandle",t);const l=new e(t);return !n&&console.log("[devtools-preload] 注册__devtoolsPreloadHandle__"),window.__devtoolsPreloadHandle__=async e=>{if("app"===e.target&&e.action){const t=l.get(e.action);!n&&console.log("[devtools-preload] 收到来自panel的action",e,t,l);let a=null,s=null;if(t)try{a=await t(e.data||{});}catch(o){}const r={...e,data:{result:a,error:s}};!n&&console.log("[devtools-preload] 处理完毕函数，回调到content-script",t,r),o(r);}},l};

console.log("[fs-devtools-preload] start");
// 创建
window.$devtoolsPreloadHandle = createPreloadHandle({ noconsole: false });
// 注册能力
window.$devtoolsPreloadHandle.use("add", ({ a, b }) => {
    console.log("接收到插件参数：", { a, b });
    return a + b;
});
