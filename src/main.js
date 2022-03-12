import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Notifications from "@kyvg/vue3-notification";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueLoading)
  .use(Notifications)
  .mount("#app");
