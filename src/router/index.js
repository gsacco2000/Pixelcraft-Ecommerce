import { createRouter, createWebHistory } from "vue-router";
import PortfolioView from "@/views/PortfolioView.vue";
// importa altre view...

const routes = [
  // altre rotte ...
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
