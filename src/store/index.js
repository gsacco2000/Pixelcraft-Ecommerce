import { createStore } from "vuex";
import products from "@/data/product.json";

export default createStore({
  state: {
    products,
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
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    favoritesCount(state) {
      return state.favoriteItems.length;
    },
    isFavorite: (state) => (productId) => {
      return state.favoriteItems.includes(productId);
    },
  },
  mutations: {
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    addToCart(state, productToAdd) {
      const existingIndex = state.cartItems.findIndex(
        (item) =>
          item.id === productToAdd.id &&
          item.selectedSize === productToAdd.selectedSize &&
          item.selectedDimension === productToAdd.selectedDimension &&
          item.selectedColor === productToAdd.selectedColor &&
          item.selectedFrame === productToAdd.selectedFrame
      );
      if (existingIndex !== -1) {
        state.cartItems[existingIndex].quantity += productToAdd.quantity;
      } else {
        state.cartItems.push({ ...productToAdd });
      }
    },
    removeFromCart(state, productToRemove) {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(
            item.id === productToRemove.id &&
            item.selectedSize === productToRemove.selectedSize &&
            item.selectedDimension === productToRemove.selectedDimension &&
            item.selectedColor === productToRemove.selectedColor &&
            item.selectedFrame === productToRemove.selectedFrame
          )
      );
    },
    toggleFavorite(state, productId) {
      const index = state.favoriteItems.indexOf(productId);
      if (index === -1) {
        state.favoriteItems.push(productId);
      } else {
        state.favoriteItems.splice(index, 1);
      }
    },
  },
  actions: {
    addToCartAction({ commit }, productToAdd) {
      if (!productToAdd.quantity || productToAdd.quantity < 1) {
        productToAdd.quantity = 1;
      }
      commit("addToCart", productToAdd);
    },

    removeFromCartAction({ commit }, productToRemove) {
      commit("removeFromCart", productToRemove);
    },
  },
});
