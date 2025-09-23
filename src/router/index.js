import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import AboutView from "@/views/AboutView.vue";
import JournalView from "@/views/JournalView.vue";
import ContattiView from "@/views/ContattiView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/portfolio", name: "Portfolio", component: PortfolioView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/contatti", name: "Contatti", component: ContattiView },
  { path: "/journal", name: "Journal", component: JournalView },
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
    path: "/filtered-catalog",
    name: "FilteredCatalog",
    component: () =>
      import(
        /* webpackChunkName: "filteredcatalog" */
        "@/views/FilteredCatalogView.vue"
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
    path: "/case/musicsound",
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
