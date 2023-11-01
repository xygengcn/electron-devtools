console.log("[devtools-page] 开始创建devtools面板");

chrome.devtools.panels.create("Electron自定义插件", "", "/index.html");
