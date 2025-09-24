<template>
  <div class="product-detail">
    <router-link to="/shop" class="back-link">
      ← Torna a Tutti i Prodotti
    </router-link>

    <div class="product-main">
      <div class="carousel-container">
        <!-- Qui inseriremo il carosello immagini -->
        <img :src="product.image" :alt="product.name" class="main-image" />
      </div>

      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p v-if="product.oldPrice">
          <span class="price-current">\${{ product.price.toFixed(2) }}</span>
          <span class="price-old">\${{ product.oldPrice.toFixed(2) }}</span>
        </p>
        <p v-else>
          <span class="price-current">\${{ product.price.toFixed(2) }}</span>
        </p>

        <p>{{ product.description || "Nessuna descrizione disponibile." }}</p>

        <!-- Selettore taglia / misura -->
        <div v-if="product.category === 'tshirt'">
          <label>Taglia</label>
          <select v-model="selectedSize">
            <option disabled value="">Seleziona taglia</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div v-if="product.category === 'poster'">
          <label>Dimensione</label>
          <select v-model="selectedDimension">
            <option disabled value="">Seleziona dimensione</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <!-- Quantità -->
        <label>Quantità</label>
        <input type="number" min="1" v-model.number="quantity" />

        <!-- Azioni -->
        <button @click="aggiungiAlCarrello">Aggiungi al carrello</button>
        <button @click="togglePreferiti">
          {{ isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti" }}
        </button>

        <!-- Sezione recensioni (placeholder) -->
        <div class="reviews">
          <h3>Recensioni</h3>
          <p>Ancora nessuna recensione.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ProductDetail",
  props: ["id"],

  data() {
    return {
      selectedSize: "",
      selectedDimension: "",
      quantity: 1,
    };
  },

  computed: {
    ...mapState(["products", "favoriteItems"]),
    product() {
      return this.products.find((p) => p.id === parseInt(this.id)) || {};
    },
    isFavorite() {
      return this.favoriteItems.some((item) => item.id === this.product.id);
    },
  },

  methods: {
    ...mapMutations(["addToCart", "toggleFavorite"]),

    aggiungiAlCarrello() {
      if (!this.product.id) return;
      this.addToCart({
        ...this.product,
        selectedSize: this.selectedSize,
        selectedDimension: this.selectedDimension,
        quantity: this.quantity,
      });
      alert("Prodotto aggiunto al carrello!");
    },

    togglePreferiti() {
      if (!this.product.id) return;
      this.toggleFavorite(this.product.id);
    },
  },
};
</script>

<style scoped>
.product-main {
  display: flex;
  gap: 2rem;
}

.carousel-container {
  width: 400px;
}

.main-image {
  width: 100%;
  height: auto;
}

.price-current {
  font-weight: bolder;
  margin-right: 5px;
}

.price-old {
  text-decoration: line-through;
  color: #999;
}

/* Aggiungi altri stili a piacere */
</style>
