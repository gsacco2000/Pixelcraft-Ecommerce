import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/portfolio", name: "Portfolio", component: PortfolioView },
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "@/views/CatalogView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
