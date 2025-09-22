import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [
      // inserisci qui i prodotti con id, name, category ecc.
    ],
    searchTerm: "",
    selectedCategory: "",
    cartItems: [],
    favoriteItems: [],
  },
  getters: {
    filteredProducts(state) {
      return state.products.filter((p) => {
        const inCategory =
          !state.selectedCategory || p.category === state.selectedCategory;
        const matchesSearch = p.name
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());
        return inCategory && matchesSearch;
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
    toggleFavorite(state, productId) {
      const index = state.favoriteItems.findIndex((p) => p.id === productId);
      if (index === -1) state.favoriteItems.push({ id: productId });
      else state.favoriteItems.splice(index, 1);
    },
  },
});

export default store;
