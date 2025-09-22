import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Poster K-food",
        price: 19.99,
        oldPrice: 25.0,
        discount: 20,
        isNew: true,
        category: "poster",
        image: "/img.shop/shop.poster1.jpeg",
      },
      {
        id: 2,
        name: "Poster no novità",
        price: 29.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "poster",
        image: "https://i.pinimg.com/736x/6c/8b/85/6c8b85fbadadf58269.jpg",
      },
      {
        id: 3,
        name: "Tee Graphic Doodle",
        price: 29.99,
        oldPrice: null,
        discount: 0,
        isNew: true,
        category: "tshirt",
        image: "/img.shop/shop.shirt1.jpeg",
      },
      {
        id: 4,
        name: "Tazze Line",
        price: 29.99,
        oldPrice: null,
        discount: 0,
        isNew: true,
        category: "tazze",
        image: "/img.shop/shop.cup1.jpeg",
      },
      {
        id: 5,
        name: "Tote Barbie vibes",
        price: 19.99,
        oldPrice: 25.0,
        discount: 5,
        isNew: true,
        category: "tote",
        image: "/img.shop/shop.tote1.jpeg",
      },
    ],
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
