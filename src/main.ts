import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { setupAntd } from "./plugins/ant-design";

createApp(App).mount("#app");
