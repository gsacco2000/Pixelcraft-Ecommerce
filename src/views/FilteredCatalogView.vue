<template>
  <div>
    <!-- Barra di navigazione: include filtri, ricerca, icone carrello e preferiti -->
    <CatalogNavBar @show-favorites="apriPreferiti" @show-cart="apriCarrello" />

    <!-- Titolo dinamico con categoria filtro -->
    <h2 class="ps-5 mb-4 fw-bold">
      Catalogo prodotti:
      <span class="category" v-if="selectedCategory">
        {{ selectedCategory }}
      </span>
      <span class="category" v-else>Tutti</span>
    </h2>

    <!-- Lista prodotti filtrata -->
    <ProductList />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CatalogNavBar from "../components/CatalogNavBar.vue";
import ProductList from "../components/productList.vue";

export default {
  name: "FilteredCatalogView",
  components: {
    CatalogNavBar,
    ProductList,
  },
  computed: {
    ...mapState(["selectedCategory"]),
  },
  methods: {
    apriPreferiti() {
      // Logica per mostrare preferiti, es. navigare o modale
      console.log("Mostra preferiti");
    },
    apriCarrello() {
      // Logica per mostrare carrello, es. navigare o modale
      console.log("Mostra carrello");
    },
  },
};
</script>

<style scoped>
.category {
  color: var(--skin-color);
  font-style: italic;
}
</style>
