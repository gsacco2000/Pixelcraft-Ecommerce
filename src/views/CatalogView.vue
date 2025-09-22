<template>
  <div>
    <CatalogNavBar @show-favorites="apriPreferiti" @show-cart="apriCarrello" />
    <HeroCatalog />
    <h2 class="ps-5 mb-4 fw-bold">Le novità del mese di Settembre</h2>
    <section class="novita-container">
      <!-- Passa i prodotti novità filtrati localmente -->
      <ProductList :products="newProducts" />
      <CategoriesSection />
    </section>
    <h3>2 - Inserire banner promo</h3>
    <h3>3 - Articoli recenti (journal)</h3>
    <h4>4 - Form e contatti specifici per shop</h4>
  </div>
</template>

<script>
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
    newProducts() {
      // filtro locale solo prodotti con isNew = true
      return this.$store.state.products.filter((p) => p.isNew);
    },
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
</style>
