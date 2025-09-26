<template>
  <div>
    <CatalogNavBar />
    <section class="container mt-4 mb-4 p-3 rounded shadow-sm">
      <button @click="goBack" class="torna_indietro btn btn-link p-0 mb-3">
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
            class="d-flex align-items-center text-decoration-none w-100 product-link"
          >
            <img
              :src="item.images[0]"
              alt=""
              class="img-thumbnail me-3 product-img"
            />
            <span class="fw-semibold">{{ item.name }}</span>
          </router-link>
          <button
            @click="remove(item.id)"
            class="btn cart-remove-btn"
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
          class="card mb-4 p-3 shadow-sm cart-mobile-card"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center w-100">
              <img
                :src="item.images[0]"
                alt=""
                class="img-fluid rounded product-img"
              />
              <router-link
                :to="{ name: 'ProductDetail', params: { id: item.id } }"
                class="fw-semibold text-decoration-none ms-3 product-name-mobile product-link"
              >
                {{ item.name }}
              </router-link>
            </div>
            <button
              @click="remove(item.id)"
              class="btn cart-remove-btn ms-3"
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
h1 {
  font-size: 2rem;
}
li {
  background-color: var(--background);
  color: var(--text);
  border: none;
  border-radius: 13px;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
}

.product-link {
  color: var(--text) !important;
}

.product-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.375rem;
}

.product-name-mobile {
  margin-left: 1.1rem !important;
  display: block;
  word-break: break-word;
  font-size: 1rem;
  color: var(--text) !important;
}

/* Card mobile simile a carrello, semplicità e coerenza */
.cart-mobile-card {
  border-radius: 13px;
  background-color: var(--background);
  color: var(--text);
  border: none;
  padding: 1rem 0.8rem;
}

/* Bottone rimuovi tondo e variabile */
.cart-remove-btn {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  border: 2px solid var(--danger, #991a1a);
  background: var(--background);
  color: var(--danger, #991a1a);
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: border-color 0.2s, color 0.2s;
}
.cart-remove-btn:active,
.cart-remove-btn:focus {
  border-color: var(--skin-color);
  color: var(--skin-color);
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.7rem;
  }
  li {
    margin-bottom: 0.75rem;
    padding: 0;
  }
  .product-img {
    width: 56px;
    height: 56px;
  }
  .cart-mobile-card .product-img {
    width: 52px;
    height: 52px;
  }
  .product-name-mobile {
    margin-left: 1rem !important;
    font-size: 1.05rem;
  }
}
</style>
