import { createSSRApp } from "vue";
import App from "./App.vue";


const obj = { count: 1 }

export const createApp = () => {
  const app = createSSRApp(App);
  app.config.globalProperties.obj = obj;
  return {
    app,
  };
}
