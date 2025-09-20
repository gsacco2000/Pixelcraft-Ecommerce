<script>
import ProductCard from "./productCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Poster 1",
          price: 19.99,
          oldPrice: 25.0,
          discount: 20,
          isNew: true,
          image:
            "https://i.pinimg.com/736x/56/0f/e7/560fe772b95eab5e57f1187c7a6b47fa.jpg",
        },
        {
          id: 2,
          name: "Poster 2",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: false,
          image:
            "https://i.pinimg.com/736x/6c/8b/85/6c8b852b64001dc6d9b04c01ec7d6ad7.jpg",
        },
        {
          id: 3,
          name: "Poster 3",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: false,
          image:
            "https://i.pinimg.com/736x/e1/6d/3b/e16d3b318668fa5e3a3f5df2b7061a60.jpg",
        },
        {
          id: 4,
          name: "Poster 4",
          price: 29.99,
          oldPrice: null,
          discount: 0,
          isNew: false,
          image:
            "https://i.pinimg.com/1200x/73/64/3b/73643b4eeaddecb13a175ce693aa921b.jpg",
        },
      ],
    };
  },
  methods: {
    handleAddToCart(productId) {
      console.log("Aggiungi al carrello prodotto id:", productId);
      // Qui puoi implementare la logica di aggiunta al carrello
    },
    handleToggleFavorite(productId) {
      console.log("Toggle preferito prodotto id:", productId);
      // Qui puoi salvare o togliere il prodotto dai preferiti
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-3 mb-3"
        v-for="product in products"
        :key="product.id"
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
