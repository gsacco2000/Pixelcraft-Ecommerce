<template>
  <div class="card position-relative shadow-sm product-card">
    <!-- Badge NEW e sconto -->
    <div class="position-absolute top-0 start-0 m-2 z-3">
      <span v-if="product.isNew" class="badge bg-success mb-1">New</span><br />
      <span v-if="product.discount" class="badge bg-danger">
        -{{ product.discount }}%
      </span>
    </div>

    <!-- Icone cuore e carrello -->
    <div
      class="icon-group position-absolute top-0 end-0 m-2 z-3 d-flex flex-column gap-2"
    >
      <!-- Icona cuore -->
      <button
        :class="[
          'icon-btn favorite-btn',
          { 'active-favorite': isFavoriteComputed },
        ]"
        aria-label="Salva preferito"
        @click.stop="toggleFavorite"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C3.21 10.119 
                  6.623 12.584 8 13.5c1.377-.916 4.79-3.381 6.286-6.062.955-1.885.837-3.362.314-4.385C13.486.878 
                  10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143a3.12 3.12 0 0 1 .176.193 
                  3.123 3.123 0 0 1 .175-.193C12.721-3.042 23.333 4.867 8 15z"
          />
        </svg>
      </button>

      <!-- Icona carrello -->
      <button
        class="icon-btn cart-btn"
        aria-label="Aggiungi al carrello"
        @click.stop="$emit('add-to-cart', { ...product, quantity: 1 })"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1
                  .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM5
                  12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
          />
        </svg>
      </button>
    </div>

    <!-- Area cliccabile immagine + info -->
    <router-link
      :to="{ name: 'ProductDetail', params: { id: product.id } }"
      class="card-link-content text-decoration-none text-dark"
      tabindex="-1"
    >
      <img
        :src="product.images ? product.images[0] : ''"
        class="card-img-top mx-auto d-block"
        :alt="product.name"
      />
      <div class="card-body text-center">
        <h6 class="card-title mb-1">{{ product.name }}</h6>
        <div class="mb-2">
          <span class="fw-bold text-primary" style="font-size: 1.2em">
            €{{ product.price.toFixed(2) }}
          </span>
          <span
            v-if="product.oldPrice"
            class="text-muted text-decoration-line-through"
            style="font-size: 1em"
          >
            €{{ product.oldPrice.toFixed(2) }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters(["isFavorite"]),
    isFavoriteComputed() {
      return this.isFavorite(this.product.id);
    },
  },
  methods: {
    ...mapMutations({
      commitToggleFavorite: "toggleFavorite",
    }),
    toggleFavorite() {
      this.commitToggleFavorite(this.product.id);
      this.$emit("toggle-favorite", this.product.id);
    },
  },
};
</script>

<style scoped>
.icon-group {
  gap: 0.5rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.icon-btn {
  background-color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  color: #adb5bd; /* grigio bootstrap muted */
  transition: background-color 0.3s, color 0.3s;
}

.icon-btn svg {
  display: block;
}

.icon-btn:hover {
  color: white;
}

.active-favorite {
  background-color: red !important;
  color: white;
}

.favorite-btn:hover {
  background-color: red !important;
  color: white;
}

.cart-btn {
  background-color: white;
  color: black;
}

.cart-btn:hover {
  background-color: green;
  color: white;
}

.card-link-content {
  position: relative;
  z-index: 1; /* sotto le icone */
}

.card-img-top {
  width: 100%;
  max-height: 320px;
  object-fit: contain;
  background: #fff;
  border-radius: 1rem 1rem 0 0;
}
</style>
