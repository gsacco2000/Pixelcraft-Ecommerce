import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/styles/style.css";

import BootstrapVueNext from "bootstrap-vue-next";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Aggiungi le librerie di icone alla libreria Font Awesome
library.add(fas, fab);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app
  .use(store)
  .use(router)
  .use(BootstrapVueNext) // aggiungi qui BootstrapVueNext
  .mount("#app");
