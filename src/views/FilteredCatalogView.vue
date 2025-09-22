<template>
  <div>
    <!-- Barra di navigazione: include filtri, ricerca, icone carrello e preferiti -->
    <CatalogNavBar @show-favorites="apriPreferiti" @show-cart="apriCarrello" />

    <!-- Titolo dinamico con categoria filtro -->
    <h1 class="mt-4 mb-3">
      Catalogo prodotti:
      <span v-if="selectedCategory">{{ selectedCategory }}</span>
      <span v-else>Tutti</span>
    </h1>

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
