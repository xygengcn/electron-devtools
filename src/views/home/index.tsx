import { defineComponent, ref } from "vue";
import "./index.scss";

export default defineComponent({
  name: "Home",
  setup() {
    const result = ref(0);

    const handleClick = () => {
      window.$devtoolsPanelHandle.invoke("add", { a: 1, b: 2 }, (data) => {
        console.log("结果是：" + data);
        result.value = data;
      });
    };
    return () => (
      <div class="home">
        <h3>结果：{result.value}</h3>
        <button onClick={handleClick}>add</button>
      </div>
    );
  },
});
