<template>
  <div>
    <CatalogNavBar @show-favorites="apriPreferiti" @show-cart="apriCarrello" />
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CatalogNavBar from "../components/CatalogNavBar.vue";
import ProductList from "../components/productList.vue";
import HeroCatalog from "../components/HeroCatalog.vue";
import CategoriesSection from "../components/CategoriesSection.vue";

export default {
  components: {
    CatalogNavBar,
    ProductList,
    HeroCatalog,
    CategoriesSection,
  },
  computed: {
    ...mapGetters(["newProducts"]),
  },
  methods: {
    apriPreferiti() {
      console.log("Apertura pagina o modal preferiti");
    },
    apriCarrello() {
      console.log("Apertura pagina o modal carrello");
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
</style>
