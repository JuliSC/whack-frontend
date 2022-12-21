import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/main.css";

const app = createApp(App);
export const pinia = createPinia();
setActivePinia(pinia);
app.use(pinia);
app.use(router);

app.mount("#app");
