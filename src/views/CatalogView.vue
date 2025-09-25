<template>
  <div>
    <CatalogNavBar
      ref="navbar"
      @show-favorites="openFavorites"
      @show-cart="openCart"
    />
    <br />
    <HeroCatalog />
    <h2 class="ps-5 mb-4 fw-bold">Le novità del mese di Settembre</h2>
    <section class="novita-container">
      <ProductList :products="newProducts" />
      <router-link
        :to="{ name: 'FilteredCatalog' }"
        class="btn-view-all-products"
        @click="resetFiltro"
      >
        Vedi tutti i prodotti
      </router-link>
      <CategoriesSection />
    </section>

    <!-- Banner subito dopo la sezione novità -->
    <div class="banner-wrapper">
      <img
        src="/img.shop/banner.shop.png"
        alt="Banner tote"
        class="banner-image"
      />
    </div>

    <!-- Drawer Preferiti e Carrello -->
    <FavoritesDrawer
      v-if="showFavorites"
      :style="{ top: navbarBottom + 'px' }"
      @close="closeDrawers"
    />
    <CartDrawer
      v-if="showCart"
      :style="{ top: navbarBottom + 'px' }"
      @close="closeDrawers"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CatalogNavBar from "../components/CatalogNavBar.vue";
import ProductList from "../components/productList.vue";
import HeroCatalog from "../components/HeroCatalog.vue";
import CategoriesSection from "../components/CategoriesSection.vue";
import FavoritesDrawer from "../components/FavoritesDrawer.vue";
import CartDrawer from "../components/CartDrawer.vue";

export default {
  components: {
    CatalogNavBar,
    ProductList,
    HeroCatalog,
    CategoriesSection,
    FavoritesDrawer,
    CartDrawer,
  },
  data() {
    return {
      showFavorites: false,
      showCart: false,
      navbarBottom: 0,
    };
  },
  computed: {
    ...mapGetters(["newProducts"]),
  },
  mounted() {
    this.calcNavbarBottom();
    window.addEventListener("resize", this.calcNavbarBottom);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calcNavbarBottom);
  },
  methods: {
    openFavorites() {
      this.showFavorites = true;
      this.showCart = false;
      this.calcNavbarBottom();
    },
    openCart() {
      this.showCart = true;
      this.showFavorites = false;
      this.calcNavbarBottom();
    },
    resetFiltro() {
      // logica reset filtro se vuoi
    },
    closeDrawers() {
      this.showCart = false;
      this.showFavorites = false;
    },
    calcNavbarBottom() {
      this.$nextTick(() => {
        if (this.$refs.navbar && this.$refs.navbar.$el) {
          this.navbarBottom =
            this.$refs.navbar.$el.getBoundingClientRect().bottom +
            window.scrollY;
        }
      });
    },
  },
};
</script>

<style scoped>
.novita-container {
  margin-bottom: 3rem;
}
.btn-view-all-products {
  display: block;
  margin: 2rem auto 0 auto;
  width: 200px;
  padding: 1rem;
  background: var(--skin-color);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50rem;
  border: none;
  box-shadow: 0 1px 3px #ededed;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;
}

.btn-view-all-products:hover,
.btn-view-all-products:focus {
  background: #146c43;
}

.banner-wrapper {
  width: 100%;
  margin-top: 2rem;
}
.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* Nascondi banner da mobile */
@media (max-width: 767px) {
  .banner-wrapper {
    display: none;
  }
}
</style>
