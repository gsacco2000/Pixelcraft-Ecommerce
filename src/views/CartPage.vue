<template>
  <div>
    <CatalogNavBar />
    <section class="container mt-4 mb-4 p-3 bg-light rounded shadow-sm">
      <button @click="goBack" class="btn btn-link p-0 mb-3">
        ← Torna a tutti i prodotti
      </button>
      <h1 class="mb-4 fw-bold">Shopping Cart ({{ cartCount }})</h1>

      <div
        v-if="cartItems.length === 0"
        class="text-center fst-italic text-muted py-5"
      >
        Il carrello è vuoto
      </div>

      <!-- DESKTOP/TABLET -->
      <table v-else class="table align-middle mb-4 d-none d-md-table">
        <thead class="table-light">
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
                class="d-flex align-items-center text-decoration-none text-dark"
              >
                <img
                  :src="item.images[0]"
                  alt=""
                  class="img-fluid rounded"
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
            </td>
            <td class="text-end fw-semibold">
              {{ (item.price * item.quantity).toFixed(2) }} €
            </td>
          </tr>
        </tbody>
      </table>

      <!-- MOBILE -->
      <div v-if="cartItems.length > 0" class="d-md-none mb-4">
        <div
          v-for="item in cartItems"
          :key="'m' + item.id"
          class="card mb-4 p-3 shadow-sm"
        >
          <div class="row g-0 align-items-center mb-2">
            <div class="col-auto">
              <img
                :src="item.images[0]"
                alt=""
                class="img-fluid rounded"
                style="width: 50px; height: 50px; object-fit: cover"
              />
            </div>
            <div class="col">
              <router-link
                :to="{ name: 'ProductDetail', params: { id: item.id } }"
                class="fw-semibold text-dark text-decoration-none ms-3 product-name-mobile"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="row g-0 align-items-center mb-2">
            <div class="col-auto">
              <button
                @click="removeFromCart(item)"
                class="btn btn-sm btn-outline-danger rounded-circle p-1 cart-remove-btn"
                aria-label="Rimuovi prodotto"
              >
                ×
              </button>
            </div>
            <div class="col-auto mx-3">
              <div
                class="input-group input-group-sm justify-content-center"
                style="min-width: 110px"
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
            </div>
            <div
              class="col text-end fw-semibold text-primary"
              style="font-size: 1.12rem"
            >
              {{ (item.price * item.quantity).toFixed(2) }} €
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
/* arrotondamenti supplementari e stile rimozione */
.card {
  border-radius: 13px;
}
.img-fluid {
  border-radius: 8px;
}
.btn-outline-danger {
  color: #e05c7e;
  border-color: #e05c7e;
}
.btn-outline-danger:hover,
.btn-outline-danger:active {
  background: #f6d2dd;
  color: #b22222;
}
.cart-remove-btn {
  border-radius: 50% !important;
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  font-size: 1.2rem;
  line-height: 1;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
  .cart-remove-btn {
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
  }

  .product-name-mobile {
    margin-left: 1rem !important;
    display: block;
    word-break: break-word;
  }
}
</style>
