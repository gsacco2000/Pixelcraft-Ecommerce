import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap css + js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// il tuo stile personale (mantiene colori/font/animazioni)
import './assets/styles/style.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
