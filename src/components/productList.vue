<template>
  <div class="container mt-4">
    <div class="row g-4">
      <div
        v-for="product in products"
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
import ProductCard from "./productCard.vue";

export default {
  components: { ProductCard },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAddToCart(productToAdd) {
      this.$store.commit("addToCart", productToAdd);
    },
    handleToggleFavorite(productId) {
      this.$store.commit("toggleFavorite", productId);
    },
  },
};
</script>
