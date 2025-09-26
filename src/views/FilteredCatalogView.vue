<template>
  <div class="catalog-root">
    <CatalogNavBar
      @show-favorites="apriPreferiti"
      @show-carrello="apriCarrello"
    />

    <h2 class="ps-5 mb-4 fw-bold">
      Catalogo prodotti:
      <span class="category" v-if="selectedCategory">
        {{ selectedCategory }}
      </span>
      <span class="category" v-else>Tutti</span>
    </h2>

    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CatalogNavBar from "../components/CatalogNavBar.vue";
import ProductList from "../components/productList.vue";

export default {
  components: {
    CatalogNavBar,
    ProductList,
  },
  computed: {
    ...mapState(["selectedCategory"]),
    ...mapGetters(["filteredProducts"]),
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
.catalog-root {
  margin-bottom: 3rem;
}

.category {
  color: var(--skin-color);
  font-style: italic;
}
</style>
