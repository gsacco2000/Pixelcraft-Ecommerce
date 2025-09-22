import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import AboutView from "@/views/AboutView.vue";
import ContattiView from "@/views/ContattiView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/portfolio", name: "Portfolio", component: PortfolioView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/contatti", name: "Contatti", component: ContattiView },
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(
        /* webpackChunkName: "shop" */
        "@/views/CatalogView.vue"
      ),
  },

  {
    path: "/case/isifoundation",
    name: "CaseIsifoundation",
    component: () =>
      import(
        /* webpackChunkName: "caseisifoundation" */
        "@/views/CaseIsifoundation.vue"
      ),
  },

  {
    path: "/case/casemusicsound",
    name: "CaseMusicsound",
    component: () =>
      import(
        /* webpackChunkName: "casemusicsound" */
        "@/views/CaseMusicsound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
