import { createApp } from "vue";
import App from "./App";
import router from "./router";
import "./utils";
import Vconsole from "vconsole";
import { PanelHandle } from "chrome-extension-ipc/panel";

const panel = new PanelHandle({ noconsole: false });

window.$devtoolsPanelHandle = panel;

new Vconsole();

const app = createApp(App);

app.use(router).mount("#app");
