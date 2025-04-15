// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { motionPlugin } from "@oku-ui/motion";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(motionPlugin);
app.mount("#app");
