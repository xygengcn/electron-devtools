import { reactive } from "vue";

console.log("NODE_DEV环境：", process.env.NODE_ENV);

interface IStoreState {
  title: string;
}

const store = reactive<{
  state: IStoreState;
  commit: (state: Partial<IStoreState>) => void;
}>({
  state: {
    title: "hello-world",
  },
  commit(state: Partial<IStoreState>) {
    console.log("[store] state", state);
  },
});
export default store;
