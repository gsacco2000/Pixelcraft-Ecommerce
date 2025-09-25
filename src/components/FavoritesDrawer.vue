<template>
  <div class="drawer favorites-drawer" :style="style" v-if="visible">
    <header>
      <h2>Preferiti ({{ favoriteProducts.length }})</h2>
      <button class="close-btn" @click="$emit('close')">×</button>
    </header>

    <div v-if="favoriteProducts.length === 0" class="empty-msg">
      Nessun prodotto nei preferiti
    </div>

    <ul v-else class="favorites-list">
      <li v-for="item in favoriteProducts" :key="item.id" class="favorite-item">
        <img :src="item.images[0]" alt="immagine prodotto" />
        <span>{{ item.name }}</span>
        <button class="remove-btn" @click="removeFromFavorites(item.id)">
          Rimuovi
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    visible: Boolean,
    style: Object,
  },
  computed: {
    ...mapState(["favoriteItems", "products"]),
    favoriteProducts() {
      return this.products.filter((p) => this.favoriteItems.includes(p.id));
    },
  },
  methods: {
    ...mapMutations(["toggleFavorite"]),
    removeFromFavorites(productId) {
      this.toggleFavorite(productId);
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
  width: 90%;
  max-width: 500px;
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
.favorites-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.favorite-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 0;
}
.favorite-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}
.remove-btn {
  margin-left: auto;
  font-weight: bold;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}
.empty-msg {
  font-style: italic;
  text-align: center;
  padding: 2rem 1rem;
}
</style>
