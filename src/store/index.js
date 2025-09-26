import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import products from "@/data/product.json";

export default createStore({
  state: {
    products,
    searchTerm: "",
    selectedCategory: "",
    cartItems: [],
    favoriteItems: [],
    reviews: [], // memorizza tutte le recensioni senza productId
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
    newProducts(state) {
      return state.products.filter((product) => product.isNew);
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
    allReviews(state) {
      return state.reviews;
    },
    avgRating(state) {
      if (!state.reviews.length) return 0;
      return (
        state.reviews.reduce((acc, r) => acc + r.rating, 0) /
        state.reviews.length
      ).toFixed(1);
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
    addReview(state, review) {
      state.reviews.unshift({
        ...review,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      });
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
    addReviewAction({ commit }, review) {
      commit("addReview", review);
    },
  },
  plugins: [
    createPersistedState({
      key: "pixelcraft-store",
      paths: ["cartItems", "favoriteItems", "reviews"],
      storage: window.localStorage,
    }),
  ],
});
