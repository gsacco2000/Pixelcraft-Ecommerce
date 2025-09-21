<template>
  <div>
    <HeroCatalog />
    <h2 class="ps-5 mb-4 fw-bold">Le novità del mese di Settembre</h2>
    <section class="novita-container">
      <ProductList />
      <CategoriesSection />
    </section>
    <h3>2 - Inserire banner promo</h3>
    <h3>3 - Articoli recenti (journal)</h3>
    <h4>4 - Form e contatti specifici per shop</h4>
  </div>
</template>

<script>
import ProductList from "../components/productList.vue";
import HeroCatalog from "../components/HeroCatalog.vue";
import CategoriesSection from "../components/CategoriesSection.vue";

export default {
  components: {
    ProductList,
    HeroCatalog,
    CategoriesSection,
  },
};
</script>

<style scoped>
.novita-container {
  margin-bottom: 3rem; /* margine inferiore se vuoi aumentarlo modifica questo valore */
}
</style>
