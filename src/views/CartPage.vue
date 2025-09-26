<template>
  <div>
    <CatalogNavBar />
    <section class="container mt-4 mb-4 p-3 rounded shadow-sm">
      <button @click="goBack" class="torna_indietro btn p-0 mb-3">
        ← Torna a tutti i prodotti
      </button>
      <h1 class="mb-4 fw-bold">Shopping Cart ({{ cartCount }})</h1>

      <div
        v-if="cartItems.length === 0"
        class="text-center fst-italic text-muted py-5"
      >
        Il carrello è vuoto
      </div>

      <table
        v-else
        class="table align-middle mb-4 d-none d-md-table custom-table"
      >
        <thead>
          <tr>
            <th style="width: 40px"></th>
            <th>Prodotto</th>
            <th class="text-end">Prezzo</th>
            <th class="text-center">Quantità</th>
            <th class="text-end">Totale</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>
              <button
                class="btn btn-sm btn-outline-danger cart-remove-btn"
                @click="removeFromCart(item)"
                aria-label="Rimuovi prodotto"
              >
                ×
              </button>
            </td>
            <td>
              <router-link
                :to="{ name: 'ProductDetail', params: { id: item.id } }"
                class="d-flex align-items-center text-decoration-none"
              >
                <img
                  :src="item.images[0]"
                  alt=""
                  class="img-fluid rounded cart-product-img"
                  style="width: 60px; height: 60px; object-fit: cover"
                />
                <span class="fw-semibold ms-3 product-name-mobile">{{
                  item.name
                }}</span>
              </router-link>
            </td>
            <td class="text-end fw-semibold">{{ item.price.toFixed(2) }} €</td>
            <td class="text-center">
              <div
                class="input-group input-group-sm justify-content-center"
                style="min-width: 120px"
              >
                <button
                  @click="decrement(item)"
                  class="btn btn-outline-primary"
                >
                  −
                </button>
                <span class="input-group-text fw-semibold border-primary">{{
                  item.quantity
                }}</span>
                <button
                  @click="increment(item)"
                  class="btn btn-outline-primary"
                >
                  +
                </button>
              </div>
            </td>
            <td class="text-end fw-semibold">
              {{ (item.price * item.quantity).toFixed(2) }} €
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="cartItems.length > 0" class="d-md-none mb-4">
        <div
          v-for="item in cartItems"
          :key="'m' + item.id"
          class="card mb-3 p-3 shadow-sm cart-mobile-card"
        >
          <div class="d-flex flex-column align-items-start">
            <router-link
              :to="{ name: 'ProductDetail', params: { id: item.id } }"
              class="d-flex align-items-center text-decoration-none mb-2 w-100"
            >
              <img
                :src="item.images[0]"
                alt=""
                class="img-fluid rounded me-2"
                style="width: 45px; height: 45px; object-fit: cover"
              />
              <span class="fw-semibold product-name-mobile ms-2">
                {{ item.name }}
              </span>
            </router-link>
            <div class="d-flex align-items-center w-100 mt-1">
              <button
                @click="removeFromCart(item)"
                class="btn cart-remove-btn me-3"
                aria-label="Rimuovi prodotto"
              >
                ×
              </button>
              <div
                class="input-group input-group-sm justify-content-center me-3"
                style="min-width: 90px"
              >
                <button
                  @click="decrement(item)"
                  class="btn btn-outline-primary"
                >
                  −
                </button>
                <span
                  class="input-group-text bg-white fw-semibold border-primary"
                  >{{ item.quantity }}</span
                >
                <button
                  @click="increment(item)"
                  class="btn btn-outline-primary"
                >
                  +
                </button>
              </div>
              <div
                class="fw-semibold ms-auto"
                style="min-width: 65px; text-align: right"
              >
                {{ (item.price * item.quantity).toFixed(2) }} €
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartItems.length > 0" class="row mt-4 align-items-center gx-1">
        <div class="col-12 col-md mb-2 mb-md-0 fw-semibold fs-5">
          Totale: {{ cartTotal.toFixed(2) }} €
        </div>
        <div class="col-12 col-md-auto text-end">
          <button class="btn btn-success px-4 fw-semibold w-100 w-md-auto">
            Procedi all'acquisto
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import CatalogNavBar from "@/components/CatalogNavBar.vue";

export default {
  components: { CatalogNavBar },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["cartCount"]),
    cartTotal() {
      return this.cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "FilteredCatalog" });
    },
    ...mapMutations(["addToCart", "removeFromCart"]),
    increment(item) {
      this.addToCart({ ...item, quantity: 1 });
    },
    decrement(item) {
      if (item.quantity > 1) this.addToCart({ ...item, quantity: -1 });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

.card,
.cart-mobile-card {
  border-radius: 13px;
  background-color: var(--background);
  color: var(--text);
  border: none;
}

.img-fluid {
  border-radius: 8px;
}

.btn-success {
  background-color: var(--skin-color);
  border: none;
}

.btn-success:hover,
.btn-success:active {
  background-color: var(--skin-color);
  font-style: italic;
  border: none;
}

.custom-table,
.custom-table thead,
.custom-table tbody,
.custom-table tr,
.custom-table th,
.custom-table td {
  background-color: var(--background) !important;
  color: var(--text) !important;
  border: none;
}

.custom-table a {
  color: var(--text) !important;
}

.cart-remove-btn {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  border-radius: 50%;
  border: 2px solid var(--danger, #991a1a);
  background: var(--background);
  color: var(--danger, #991a1a);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .product-name-mobile {
    word-break: break-word;
    font-size: 1.05rem;
    color: var(--text) !important;
    line-height: 1.25;
    margin-top: 2px;
  }
  .cart-mobile-card {
    padding: 1.1rem 0.7rem;
    background: var(--background);
    color: var(--text);
    border: none;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.23);
  }
}
</style>
