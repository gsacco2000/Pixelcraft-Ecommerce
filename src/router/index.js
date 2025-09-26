import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import AboutView from "@/views/AboutView.vue";
import JournalView from "@/views/JournalView.vue";
import ContattiView from "@/views/ContattiView.vue";
import ArticoloMaterieprime from "@/views/ArticoloMaterieprime.vue";
import CartPage from "@/views/CartPage.vue";
import FavoritesPage from "@/views/FavoritesPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/portfolio", name: "Portfolio", component: PortfolioView },
  { path: "/about", name: "About", component: AboutView },
  { path: "/contatti", name: "Contatti", component: ContattiView },
  { path: "/journal", name: "Journal", component: JournalView },
  { path: "/cart", name: "Cart", component: CartPage },
  { path: "/favorites", name: "Favorites", component: FavoritesPage },
  {
    path: "/articolomaterieprime",
    name: "ArticoloMaterieprime",
    component: ArticoloMaterieprime,
  },
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "@/views/CatalogView.vue"),
  },
  {
    path: "/filtered-catalog",
    name: "FilteredCatalog",
    component: () => import("@/views/FilteredCatalogView.vue"),
  },
  {
    path: "/case/isifoundation",
    name: "CaseIsifoundation",
    component: () => import("@/views/CaseIsifoundation.vue"),
  },
  {
    path: "/case/musicsound",
    name: "CaseMusicsound",
    component: () => import("@/views/CaseMusicsound.vue"),
  },
  // Aggiungi questa rotta dinamica per il dettaglio prodotto
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("@/views/ProductDetailView.vue"),
    props: true, // permette di passare gli params come props
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
