<template>
  <div class="container mt-4">
    <div class="row g-4">
      <div
        v-for="product in newProducts"
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
import ProductCard from "./productCard";

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Poster K-food",
          price: 19.99,
          oldPrice: 25.0,
          discount: 20,
          isNew: true,
          image: "/img.shop/shop.poster1.jpeg",
        },
        {
          id: 2,
          name: "Poster no novità",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: false,
          image: "https://i.pinimg.com/736x/6c/8b/85/6c8b85fbadadf58269",
        },
        {
          id: 3,
          name: "Tee Graphic Doodle",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: true,
          image: "/img.shop/shop.shirt1.jpeg",
        },
        {
          id: 4,
          name: "Tazze Line",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: true,
          image: "/img.shop/shop.cup1.jpeg",
        },
        {
          id: 5,
          name: "Tote Barbie vibes",
          price: 19.99,
          oldPrice: 25.0,
          discount: 5,
          isNew: true,
          image: "/img.shop/shop.tote1.jpeg",
        },
      ],
    };
  },
  computed: {
    newProducts() {
      return this.products.filter((p) => p.isNew);
    },
  },
  methods: {
    handleAddToCart(productId) {
      // gestione aggiunta al carrello
      console.log("Aggiungi al carrello prodotto id:", productId);
    },
    handleToggleFavorite(productId) {
      // gestione preferiti
      console.log("Toggle preferito prodotto id:", productId);
    },
  },
};
</script>
