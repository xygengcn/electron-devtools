# 如何在Electron开发devtools插件


## 1、建立Vue项目

> 为了方便快速建立项目，我已经写好脚手架，直接clone项目，快速开发

### 拉取代码

```shell
git clone https://github.com/xygengcn/electron-devtool.git
```

### 安装依赖

```shell
yarn
```

### 运行项目

```shell
yarn dev
```

### 打包项目

```shell
yarn build
```


## 2、安装插件在chrome调试


> 打开chrome://extensions/，打开开发者模式，直接把打包产物拖到窗口即可


## 3、如何在Electron安装插件

```js
// 安装插件函数
export async function installLocalExtension(path: string): Promise<Electron.Extension> {
  return session.defaultSession.loadExtension(path, { allowFileAccess: true });
}

/**
 * 安装插件
 */
export async function installDevtoolsExtends() {
  const extensionsPath = "插件目录";
  installLocalExtension(extensionPath).then((result) => {console.log('[devtools] 插件安装成功', result.name, result.path);})
}


// 在app启动的时候执行

app.on('ready', () => {
   // 安装拓展
  installDevtoolsExtends();
});

```