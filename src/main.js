import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/styles/style.css";

import BootstrapVueNext from "bootstrap-vue-next";

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVueNext) // aggiungi qui BootstrapVueNext
  .mount("#app");
