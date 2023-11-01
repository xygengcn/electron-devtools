import { defineComponent, onMounted } from "vue";
import "./app.scss";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      window.$devtoolsPanelHandle.handle("connect", (data) => {
        console.log("[devtools-panel] 握手成功", data);
      });
    });

    return () => (
      <div class="app">
        <h1 class="app-header">hello-word</h1>
        <div class="app-content">
          <router-view></router-view>
        </div>
      </div>
    );
  },
});
