<template>
  <div>
    <CatalogNavBar />

    <div class="container py-5">
      <button class="btn btn-link mb-4" @click="goBack">
        ← Torna a tutti i prodotti
      </button>

      <div class="row">
        <div class="col-md-6 d-flex flex-column align-items-center">
          <img
            v-if="selectedImage"
            :src="selectedImage"
            alt="Immagine prodotto"
            class="img-fluid main-img mb-3"
          />
          <div v-else class="no-image">Immagine non disponibile</div>

          <div
            class="d-flex gap-2 thumbnails"
            v-if="product.images && product.images.length > 1"
          >
            <img
              v-for="(src, idx) in product.images"
              :key="idx"
              :src="src"
              alt="Anteprima prodotto"
              class="img-thumbnail"
              :class="{ active: selectedImage === src }"
              @click="selectedImage = src"
            />
          </div>
        </div>

        <div class="col-md-6">
          <h1>{{ product.name }}</h1>
          <p class="h4 text-primary">
            €{{ product.price?.toFixed(2) }}
            <span
              v-if="product.oldPrice"
              class="text-muted text-decoration-line-through ms-2"
            >
              €{{ product.oldPrice?.toFixed(2) }}
            </span>
            <span v-if="product.discount" class="badge bg-danger ms-2">
              -{{ product.discount }}%
            </span>
          </p>

          <p>{{ product.description }}</p>

          <div v-if="product.category === 'poster'" class="mb-3">
            <label for="dimension" class="form-label">Dimensione:</label>
            <select
              id="dimension"
              v-model="selectedDimension"
              class="form-select w-auto"
              required
            >
              <option disabled value="">Seleziona dimensione</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <label class="form-label mt-3">Cornice:</label>
            <div>
              <button
                v-for="option in frameOptions"
                :key="option.value"
                :class="[
                  'btn',
                  'me-2',
                  selectedFrame === option.value
                    ? 'btn-primary'
                    : 'btn-outline-secondary',
                ]"
                @click="selectedFrame = option.value"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <div class="mb-3">
            <label for="qty" class="form-label">Quantità:</label>
            <input
              type="number"
              id="qty"
              v-model.number="quantity"
              min="1"
              class="form-control w-auto"
            />
          </div>

          <button
            class="btn btn-primary me-3"
            @click="handleAddToCart"
            :disabled="!filtersValid"
          >
            Aggiungi al carrello
          </button>
          <button
            class="btn"
            :class="isFavorite ? 'btn-danger' : 'btn-outline-secondary'"
            @click="handleToggleFavorite"
          >
            {{ isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogNavBar from "@/components/CatalogNavBar.vue";
import { mapState } from "vuex";

export default {
  components: { CatalogNavBar },
  props: ["id"],
  data() {
    return {
      selectedImage: "",
      selectedDimension: "",
      selectedFrame: "",
      quantity: 1,
      frameOptions: [
        { label: "Nessuna", value: "" },
        { label: "Nera", value: "black" },
        { label: "Bianca", value: "white" },
        { label: "Effetto Legno", value: "wood" },
      ],
      isFavorite: false,
    };
  },
  computed: {
    ...mapState(["products"]),
    product() {
      return this.products.find((p) => p.id === Number(this.id)) || {};
    },
    filtersValid() {
      return this.selectedDimension && this.quantity > 0;
    },
  },
  watch: {
    product: {
      immediate: true,
      handler(newProduct) {
        if (newProduct.images && newProduct.images.length > 0) {
          this.selectedImage = newProduct.images[0];
        } else {
          this.selectedImage = "";
        }
      },
    },
  },
  methods: {
    handleAddToCart() {
      if (!this.filtersValid) return;
      // QUI la logica reale per aggiungere al carrello con Vuex
      alert("Prodotto aggiunto al carrello!");
    },
    handleToggleFavorite() {
      this.isFavorite = !this.isFavorite;
      // QUI essendo demo placeholder gestisci favorite
    },
    goBack() {
      this.$router.push({ name: "FilteredCatalog" });
    },
  },
};
</script>

<style scoped>
.main-img {
  max-width: 400px;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
}

.thumbnails img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.thumbnails img.active,
.thumbnails img:hover {
  border-color: #0d6efd;
}
</style>
