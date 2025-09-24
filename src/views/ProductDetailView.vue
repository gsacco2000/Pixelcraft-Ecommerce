<template>
  <div>
    <CatalogNavBar />

    <div class="container py-5">
      <button class="btn btn-link mb-4" @click="goBack">
        ← Torna a tutti i prodotti
      </button>

      <div class="row">
        <div class="col-md-6 d-flex flex-column align-items-center">
          <!-- Immagine grande -->
          <img
            :src="selectedImage"
            alt="Immagine prodotto"
            class="img-fluid main-img mb-3"
          />

          <!-- Immagini miniature -->
          <div class="d-flex gap-2 thumbnails">
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
            €{{ product.price.toFixed(2) }}
            <span
              v-if="product.oldPrice"
              class="text-muted text-decoration-line-through ms-2"
            >
              €{{ product.oldPrice.toFixed(2) }}
            </span>
            <span v-if="product.discount" class="badge bg-danger ms-2">
              -{{ product.discount }}%
            </span>
          </p>

          <p>{{ product.description }}</p>

          <!-- Filtri per poster -->
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

export default {
  components: { CatalogNavBar },
  data() {
    return {
      selectedImage: "/img.shop/shop.poster1.jpeg",
      selectedDimension: "",
      selectedFrame: "",
      quantity: 1,
      frameOptions: [
        { label: "Nessuna", value: "" },
        { label: "Nera", value: "black" },
        { label: "Bianca", value: "white" },
        { label: "Effetto Legno", value: "wood" },
      ],
      product: {
        id: 1,
        name: "Poster K-food",
        price: 19.99,
        oldPrice: 25.0,
        discount: 20,
        isNew: true,
        category: "poster",
        images: [
          "/img.shop/shop.poster1.jpeg",
          "/img.shop/shop.poster1-2.jpeg",
          "/img.shop/shop.poster1-3.jpeg",
          "/img.shop/shop.poster1-4.jpeg",
        ],
        description:
          "Bellissimo poster dedicato alla cucina K-food, perfetto per arredare la tua casa con stile.",
      },
      // placeholder preferiti
      isFavorite: false,
    };
  },
  computed: {
    filtersValid() {
      return this.selectedDimension && this.quantity > 0;
    },
  },
  methods: {
    handleAddToCart() {
      if (!this.filtersValid) return;
      alert("Prodotto aggiunto al carrello!");
      // Logica reale addToCart da Vuex o API
    },
    handleToggleFavorite() {
      this.isFavorite = !this.isFavorite;
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
