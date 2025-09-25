<template>
  <div class="drawer cart-drawer" :style="style" v-if="visible">
    <header>
      <h2>Shopping Cart ({{ cartCount }} articoli)</h2>
      <button class="close-btn" @click="$emit('close')">×</button>
    </header>
    <div v-if="cartItems.length === 0" class="empty-msg">
      Il carrello è vuoto
    </div>
    <table v-else class="cart-table">
      <thead>
        <tr>
          <th></th>
          <th>Prodotto</th>
          <th>Prezzo</th>
          <th>Quantità</th>
          <th>Totale</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>
            <button class="remove-btn" @click="removeFromCart(item)">×</button>
          </td>
          <td class="product-info">
            <img :src="item.images[0]" alt="immagine prodotto" />
            <div>
              <div class="name">{{ item.name }}</div>
              <div class="variant" v-if="item.selectedColor">
                Colore: {{ item.selectedColor }}
              </div>
            </div>
          </td>
          <td class="price">{{ item.price.toFixed(2) }} €</td>
          <td class="quantity-controls">
            <button @click="decrement(item)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="increment(item)">+</button>
          </td>
          <td class="subtotal">
            {{ (item.price * item.quantity).toFixed(2) }} €
          </td>
        </tr>
      </tbody>
    </table>
    <footer v-if="cartItems.length > 0" class="cart-footer">
      <div class="total">
        Totale: <b>{{ cartTotal.toFixed(2) }} €</b>
      </div>
      <button class="checkout-btn">Procedi all'acquisto</button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  props: {
    visible: Boolean,
    style: Object,
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["cartCount"]),
    cartTotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    ...mapMutations(["removeFromCart", "addToCart"]),
    increment(item) {
      this.addToCart({ ...item, quantity: 1 });
    },
    decrement(item) {
      if (item.quantity > 1) {
        this.addToCart({ ...item, quantity: -1 });
      }
    },
    removeFromCart(item) {
      this.removeFromCart(item);
    },
  },
};
</script>

<style scoped>
.drawer {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 95%;
  max-width: 600px;
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.close-btn {
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}
.cart-table {
  width: 100%;
  border-collapse: collapse;
}
.cart-table th,
.cart-table td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #eaeaea;
}
.product-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.product-info img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
.quantity-controls button {
  width: 24px;
  height: 24px;
  font-size: 1.25rem;
  margin: 0 0.25rem;
  cursor: pointer;
}
.remove-btn {
  font-weight: bold;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}
.cart-footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checkout-btn {
  background-color: #2a6f2d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
}
.empty-msg {
  padding: 1rem;
  font-style: italic;
  text-align: center;
}
</style>
