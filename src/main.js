import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Notifications from "@kyvg/vue3-notification";
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueLoading)
  .use(Notifications)
  .use(
    createAuth0({
      domain: "dev-hbuncxuc.us.auth0.com",
      client_id: "RiZoV187P48Ex4wAcn7p3ecnEOF8sYjM",
      redirect_uri: "https://pournoobs-backend.herokuapp.com/",
    })
  )
  .mount("#app");
