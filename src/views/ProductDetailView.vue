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

          <!-- Selezione tazze -->
          <div v-if="product.category === 'tazze'" class="mb-3">
            <label class="form-label">Dimensione Tazza:</label>
            <select v-model="selectedMugOption" class="form-select w-auto">
              <option
                v-for="option in mugOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Selezione tshirt -->
          <div v-if="product.category === 'tshirt'" class="mb-3">
            <label class="form-label">Taglia T-shirt:</label>
            <select v-model="selectedTshirtSize" class="form-select w-auto">
              <option
                v-for="size in tshirtSizes"
                :key="size.value"
                :value="size.value"
              >
                {{ size.label }}
              </option>
            </select>
          </div>

          <!-- Selezione tote -->
          <div v-if="product.category === 'tote'" class="mb-3">
            <label class="form-label">Colore Tote:</label>
            <select v-model="selectedToteColor" class="form-select w-auto">
              <option
                v-for="color in toteColors"
                :key="color.value"
                :value="color.value"
              >
                {{ color.label }}
              </option>
            </select>
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
            :class="isFavoriteComputed ? 'btn-danger' : 'btn-outline-secondary'"
            @click="handleToggleFavorite"
          >
            {{
              isFavoriteComputed
                ? "Rimuovi dai preferiti"
                : "Aggiungi ai preferiti"
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogNavBar from "@/components/CatalogNavBar.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

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
      mugOptions: [
        { label: "Standard", value: "standard" },
        { label: "Grande", value: "large" },
        { label: "Piccola", value: "small" },
      ],
      tshirtSizes: [
        { label: "Small", value: "S" },
        { label: "Medium", value: "M" },
        { label: "Large", value: "L" },
        { label: "Extra Large", value: "XL" },
      ],
      toteColors: [
        { label: "Nero", value: "black" },
        { label: "Bianco", value: "white" },
        { label: "Beige", value: "beige" },
      ],
      selectedMugOption: "standard",
      selectedTshirtSize: "M",
      selectedToteColor: "black",
    };
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["isFavorite"]),
    product() {
      return this.products.find((p) => p.id === Number(this.id)) || {};
    },
    filtersValid() {
      // Puoi espandere la validazione includendo le nuove selezioni se vuoi
      const baseValid = this.selectedDimension && this.quantity > 0;
      if (this.product.category === "poster") return baseValid;
      if (this.product.category === "tazze")
        return this.selectedMugOption && this.quantity > 0;
      if (this.product.category === "tshirt")
        return this.selectedTshirtSize && this.quantity > 0;
      if (this.product.category === "tote")
        return this.selectedToteColor && this.quantity > 0;
      return this.quantity > 0; // Default fallback
    },
    isFavoriteComputed() {
      return this.isFavorite(this.product.id);
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
    ...mapMutations(["addToCart", "toggleFavorite"]),
    handleAddToCart() {
      if (!this.filtersValid) return;

      const productToAdd = {
        ...this.product,
        quantity: this.quantity,
        selectedDimension: this.selectedDimension,
        selectedFrame: this.selectedFrame,
        selectedMugOption: this.selectedMugOption,
        selectedTshirtSize: this.selectedTshirtSize,
        selectedToteColor: this.selectedToteColor,
      };

      this.addToCart(productToAdd);

      alert("Prodotto aggiunto al carrello!");
    },
    handleToggleFavorite() {
      this.toggleFavorite(this.product.id);
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
