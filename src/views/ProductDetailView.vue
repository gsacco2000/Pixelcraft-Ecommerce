<template>
  <div>
    <CatalogNavBar @show-favorites="showFavorites" @show-cart="showCart" />

    <div class="container py-5">
      <button class="btn btn-link mb-4" @click="goBackToFilteredCatalog">
        ← Torna a tutti i prodotti
      </button>
      <div class="row">
        <div class="col-md-6">
          <img
            :src="product.image"
            class="img-fluid mb-4"
            :alt="product.name"
          />
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
          </p>
          <p>{{ product.description }}</p>

          <!-- Filtri -->
          <div v-if="product.category === 'tshirt'" class="mb-3">
            <label for="size" class="form-label">Taglia:</label>
            <select id="size" v-model="selectedSize" class="form-select w-auto">
              <option disabled value="">Seleziona taglia</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div v-if="product.category === 'poster'" class="mb-3">
            <label for="dimension" class="form-label">Dimensione:</label>
            <select
              id="dimension"
              v-model="selectedDimension"
              class="form-select w-auto"
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
                class="btn me-2"
                :class="
                  selectedFrame === option.value
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                "
                @click="selectedFrame = option.value"
              >
                {{ option.label }}
              </button>
            </div>
          </div>

          <div v-if="product.category === 'tazze'" class="mb-3">
            <label for="colorSelect" class="form-label">Colore:</label>
            <select
              id="colorSelect"
              v-model="selectedColor"
              class="form-select w-auto"
            >
              <option disabled value="">Seleziona colore</option>
              <option v-for="color in mugColors" :key="color">
                {{ color }}
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label for="quantity" class="form-label">Quantità:</label>
            <input
              id="quantity"
              type="number"
              v-model.number="quantity"
              min="1"
              class="form-control w-auto"
            />
          </div>

          <!-- Pulsanti standard -->
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "ProductDetail",
  components: { CatalogNavBar },
  props: ["id"],
  data() {
    return {
      selectedSize: "",
      selectedDimension: "",
      selectedFrame: "",
      selectedColor: "",
      quantity: 1,
      frameOptions: [
        { label: "Nessuna", value: "" },
        { label: "Nera", value: "black" },
        { label: "Bianca", value: "white" },
        { label: "Effetto legno", value: "wood" },
      ],
      mugColors: ["Bianco", "Blu", "Arancio", "Giallo", "Verde"],
    };
  },
  computed: {
    ...mapState(["products", "favoriteItems"]),
    product() {
      return this.products.find((p) => p.id == this.id) || {};
    },
    isFavorite() {
      return this.favoriteItems.some((item) => item.id === this.product.id);
    },
    filtersValid() {
      if (this.product.category === "tshirt")
        return this.selectedSize && this.quantity > 0;
      if (this.product.category === "poster")
        return this.selectedDimension && this.quantity > 0;
      if (this.product.category === "tazze")
        return this.selectedColor && this.quantity > 0;
      return this.quantity > 0;
    },
  },
  methods: {
    ...mapMutations(["addToCart", "toggleFavorite"]),
    handleAddToCart() {
      if (!this.filtersValid) return;
      this.addToCart({
        ...this.product,
        selectedSize: this.selectedSize,
        selectedDimension: this.selectedDimension,
        selectedColor: this.selectedColor,
        selectedFrame: this.selectedFrame,
        quantity: this.quantity,
      });
      alert("Prodotto aggiunto al carrello!");
    },
    handleToggleFavorite() {
      if (!this.product.id) return;
      this.toggleFavorite(this.product.id);
    },
    goBackToFilteredCatalog() {
      this.$router.push({ name: "FilteredCatalog" });
    },
    showFavorites() {
      console.log("Mostra preferiti");
    },
    showCart() {
      console.log("Mostra carrello");
    },
  },
};
</script>
