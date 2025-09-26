<template>
  <div>
    <CatalogNavBar />
    <section class="container mt-4 mb-4 p-3 rounded shadow-sm">
      <button @click="goBack" class="btn btn-link p-0 mb-3">
        ← Torna a tutti i prodotti
      </button>
      <h1 class="mb-4 fw-bold">Preferiti ({{ favoriteProducts.length }})</h1>

      <div
        v-if="favoriteProducts.length === 0"
        class="text-center fst-italic py-5"
      >
        Nessun prodotto nei preferiti
      </div>

      <!-- DESKTOP/TABLET -->
      <ul v-else class="list-group d-none d-md-block">
        <li
          v-for="item in favoriteProducts"
          :key="item.id"
          class="list-group-item d-flex align-items-center justify-content-between"
        >
          <router-link
            :to="{ name: 'ProductDetail', params: { id: item.id } }"
            class="d-flex align-items-center text-decoration-none"
          >
            <img
              :src="item.images[0]"
              alt=""
              class="img-thumbnail me-3"
              style="
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 0.375rem;
              "
            />
            <span class="fw-semibold">{{ item.name }}</span>
          </router-link>
          <button
            @click="remove(item.id)"
            class="btn btn-sm btn-outline-danger cart-remove-btn"
            aria-label="Rimuovi dai preferiti"
          >
            ×
          </button>
        </li>
      </ul>

      <!-- MOBILE CARD -->
      <div v-if="favoriteProducts.length > 0" class="d-md-none">
        <div
          v-for="item in favoriteProducts"
          :key="'m' + item.id"
          class="card mb-4 p-3 shadow-sm"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center w-100">
              <img
                :src="item.images[0]"
                alt=""
                class="img-fluid rounded"
                style="width: 56px; height: 56px; object-fit: cover"
              />
              <router-link
                :to="{ name: 'ProductDetail', params: { id: item.id } }"
                class="fw-semibold text-dark text-decoration-none ms-3 product-name-mobile"
              >
                {{ item.name }}
              </router-link>
            </div>
            <button
              @click="remove(item.id)"
              class="btn btn-sm btn-outline-danger cart-remove-btn ms-3"
              aria-label="Rimuovi dai preferiti"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CatalogNavBar from "@/components/CatalogNavBar.vue";

export default {
  components: { CatalogNavBar },
  computed: {
    ...mapState(["products", "favoriteItems"]),
    favoriteProducts() {
      return this.products.filter((p) => this.favoriteItems.includes(p.id));
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "FilteredCatalog" });
    },
    ...mapMutations(["toggleFavorite"]),
    remove(id) {
      this.toggleFavorite(id);
    },
  },
};
</script>

<style scoped>
li {
  background-color: var(--background);
  margin-bottom: 2rem;
  color: var(--text);
}
.cart-remove-btn {
  border-radius: 50% !important;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  aspect-ratio: 1/1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  font-size: 1.15rem;
  line-height: 1;
  color: #e05c7e;
  border-color: #e05c7e;
  transition: color 0.2s;
  box-sizing: border-box;
}
.cart-remove-btn:hover,
.cart-remove-btn:active {
  background: #f6d2dd;
  color: #b22222;
}

.product-name-mobile {
  margin-left: 1.1rem !important;
  display: block;
  word-break: break-word;
}

@media (max-width: 600px) {
  .cart-remove-btn {
    width: 34px;
    height: 34px;
    min-width: 34px;
    min-height: 34px;
    font-size: 1.1rem;
  }
  .product-name-mobile {
    margin-left: 1.05rem !important;
  }
}
</style>
