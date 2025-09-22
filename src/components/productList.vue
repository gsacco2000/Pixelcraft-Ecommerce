<template>
  <div class="container mt-4">
    <div class="row g-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <ProductCard
          :product="product"
          @add-to-cart="handleAddToCart"
          @toggle-favorite="handleToggleFavorite"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductCard from "./productCard";

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(["filteredProducts"]),
  },
  methods: {
    ...mapMutations(["addToCart", "toggleFavorite"]),
    handleAddToCart(product) {
      this.addToCart(product);
    },
    handleToggleFavorite(productId) {
      this.toggleFavorite(productId);
    },
  },
};
</script>
