<template>
  <div class="product-detail container py-4">
    <router-link to="/shop" class="back-link mb-3 d-inline-block"
      >← Torna a Tutti i Prodotti</router-link
    >

    <div class="row">
      <div class="col-md-6">
        <div
          id="productCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              v-for="(img, index) in product.images"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img
                :src="img"
                class="d-block w-100"
                :alt="`Image ${index + 1}`"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <p v-if="product.oldPrice">
          <span class="fs-4 fw-bold text-primary me-2"
            >\${{ product.price.toFixed(2) }}</span
          >
          <span class="text-muted text-decoration-line-through"
            >\${{ product.oldPrice.toFixed(2) }}</span
          >
        </p>
        <p v-else>
          <span class="fs-4 fw-bold text-primary"
            >\${{ product.price.toFixed(2) }}</span
          >
        </p>

        <p>{{ product.description || "Nessuna descrizione disponibile." }}</p>

        <div v-if="product.category === 'tshirt'" class="mb-3">
          <label for="sizeSelect" class="form-label">Taglia</label>
          <select
            id="sizeSelect"
            v-model="selectedSize"
            class="form-select w-auto"
          >
            <option disabled value="">Seleziona taglia</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div v-if="product.category === 'poster'" class="mb-3">
          <label for="dimensionSelect" class="form-label">Dimensione</label>
          <select
            id="dimensionSelect"
            v-model="selectedDimension"
            class="form-select w-auto"
          >
            <option disabled value="">Seleziona dimensione</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="quantityInput" class="form-label">Quantità</label>
          <input
            id="quantityInput"
            type="number"
            min="1"
            v-model.number="quantity"
            class="form-control w-auto"
          />
        </div>

        <button @click="aggiungiAlCarrello" class="btn btn-primary me-2">
          Aggiungi al carrello
        </button>
        <button @click="togglePreferiti" class="btn btn-outline-secondary">
          {{ isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti" }}
        </button>

        <div class="reviews mt-4">
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
      return (
        this.products.find((p) => p.id === parseInt(this.id)) || { images: [] }
      );
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
/* Eventuali personalizzazioni */
.back-link {
  text-decoration: none;
  color: #6c757d;
  font-weight: 500;
}
</style>
