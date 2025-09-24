import { createStore } from "vuex";
import products from "@/data/product.json"; // Assicurati che il percorso sia corretto!

export default createStore({
  state: {
    products, // Usa direttamente quello importato dal JSON
    searchTerm: "",
    selectedCategory: "",
    cartItems: [],
    favoriteItems: [],
  },

  getters: {
    filteredProducts(state) {
      return state.products.filter((product) => {
        const categoryMatch =
          !state.selectedCategory ||
          product.category === state.selectedCategory;
        const searchMatch = product.name
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
      });
    },
    cartCount(state) {
      return state.cartItems.length;
    },
    favoritesCount(state) {
      return state.favoriteItems.length;
    },
  },

  mutations: {
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    addToCart(state, product) {
      state.cartItems.push(product);
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    toggleFavorite(state, productId) {
      const index = state.favoriteItems.findIndex(
        (item) => item.id === productId
      );
      if (index === -1) {
        state.favoriteItems.push({ id: productId });
      } else {
        state.favoriteItems.splice(index, 1);
      }
    },
  },
});
