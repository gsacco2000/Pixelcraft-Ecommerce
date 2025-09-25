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

          <!-- Badge stato stock con tooltip -->
          <span
            class="badge"
            :class="{
              'bg-success text-white': stockStatus === 'available',
              'bg-warning text-dark': stockStatus === 'running_out',
              'bg-danger text-white': stockStatus === 'out_of_stock',
            }"
            v-b-tooltip.hover
            :title="tooltipStock"
          >
            {{ stockLabels[stockStatus] }}
          </span>

          <p class="h4 text-primary mt-2">
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
            <div class="d-flex align-items-center gap-4 flex-wrap">
              <div>
                <label class="form-label mb-1">Taglia T-shirt:</label>
                <select
                  v-model="selectedTshirtSize"
                  class="form-select w-auto mb-0"
                >
                  <option
                    v-for="size in tshirtSizes"
                    :key="size.value"
                    :value="size.value"
                  >
                    {{ size.label }}
                  </option>
                </select>
              </div>
              <!-- Tabella guida taglie -->
              <div
                class="size-guide m-0"
                style="min-width: 285px; max-width: 450px"
              >
                <table class="table table-sm mb-0 align-middle">
                  <thead>
                    <tr>
                      <th>Taglia</th>
                      <th>Busto (cm)</th>
                      <th>Lunghezza (cm)</th>
                      <th>Manica (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S</td>
                      <td>92</td>
                      <td>69</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>100</td>
                      <td>71</td>
                      <td>21.5</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>108</td>
                      <td>73</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>116</td>
                      <td>75</td>
                      <td>22.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
            :disabled="!filtersValid || stockStatus === 'out_of_stock'"
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

    <!-- Recensioni -->
    <ReviewsSection />
  </div>
</template>

<script>
import CatalogNavBar from "@/components/CatalogNavBar.vue";
import ReviewsSection from "@/components/ReviewsSection.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: { CatalogNavBar, ReviewsSection },
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
      stockLabels: {
        available: "Disponibile",
        running_out: "In esaurimento",
        out_of_stock: "Esaurito",
      },
    };
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["isFavorite"]),
    product() {
      return this.products.find((p) => p.id === Number(this.id)) || {};
    },
    stockStatus() {
      const qty = this.product.stockQuantity ?? 0;
      if (qty === 0) {
        return "out_of_stock";
      } else if (qty > 0 && qty <= 5) {
        return "running_out";
      } else {
        return "available";
      }
    },
    tooltipStock() {
      switch (this.stockStatus) {
        case "available":
          return "Il prodotto è disponibile in quantità sufficiente";
        case "running_out":
          return "Attenzione: il prodotto sta per esaurirsi!";
        case "out_of_stock":
          return "Prodotto esaurito, al momento non disponibile";
        default:
          return "";
      }
    },
    filtersValid() {
      const baseValid = this.selectedDimension && this.quantity > 0;
      if (this.product.category === "poster") return baseValid;
      if (this.product.category === "tazze")
        return this.selectedMugOption && this.quantity > 0;
      if (this.product.category === "tshirt")
        return this.selectedTshirtSize && this.quantity > 0;
      if (this.product.category === "tote")
        return this.selectedToteColor && this.quantity > 0;
      return this.quantity > 0;
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
.size-guide table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}
.size-guide th,
.size-guide td {
  border: 1px solid #dee2e6;
  padding: 0.4rem 0.75rem;
  text-align: center;
  vertical-align: middle;
}
</style>
