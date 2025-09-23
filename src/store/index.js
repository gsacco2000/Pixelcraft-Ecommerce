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
        image: "/img.shop/shop.poster2.jpeg",
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
      {
        id: 6,
        name: "T-shirt Vintage Logo",
        price: 24.99,
        oldPrice: 34.99,
        discount: 15,
        isNew: false,
        category: "tshirt",
        image: "/img.shop/shop.shirt2.jpeg",
      },
      {
        id: 7,
        name: "Poster Art Deco",
        price: 14.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "poster",
        image: "/img.shop/shop.poster3.jpeg",
      },
      {
        id: 8,
        name: "Tazze Classic White",
        price: 12.99,
        oldPrice: 18.5,
        discount: 10,
        isNew: false,
        category: "tazze",
        image: "/img.shop/shop.cup2.jpeg",
      },
      {
        id: 9,
        name: "Tote Bag Floral",
        price: 21.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "tote",
        image: "/img.shop/shop.tote2.jpeg",
      },
      {
        id: 10,
        name: "Poster Landscape",
        price: 17.99,
        oldPrice: 25.0,
        discount: 10,
        isNew: false,
        category: "poster",
        image: "/img.shop/shop.poster4.jpeg",
      },
      {
        id: 11,
        name: "T-shirt Cartoon Print",
        price: 27.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "tshirt",
        image: "/img.shop/shop.shirt3.jpeg",
      },
      {
        id: 12,
        name: "Pack of 2 Vintage Posters",
        price: 35.99,
        oldPrice: 45.99,
        discount: 20,
        isNew: false,
        category: "poster",
        image: "/img.shop/shop.poster5.jpeg",
      },
      {
        id: 13,
        name: "Tote Bag Urban Style",
        price: 22.5,
        oldPrice: 28.0,
        discount: 10,
        isNew: true,
        category: "tote",
        image: "/img.shop/shop.tote3.jpeg",
      },
      {
        id: 14,
        name: "Classic White Mug",
        price: 14.99,
        oldPrice: 19.99,
        discount: 15,
        isNew: false,
        category: "tazze",
        image: "/img.shop/shop.cup3.jpeg",
      },
      {
        id: 15,
        name: "T-shirt Band Logo",
        price: 34.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "tshirt",
        image: "/img.shop/shop.shirt4.jpeg",
      },
      {
        id: 16,
        name: "Tote Bag Eco Friendly",
        price: 19.99,
        oldPrice: 25.0,
        discount: 10,
        isNew: true,
        category: "tote",
        image: "/img.shop/shop.tote4.jpeg",
      },
      {
        id: 17,
        name: "Tazze Colorate",
        price: 18.99,
        oldPrice: null,
        discount: 0,
        isNew: true,
        category: "tazze",
        image: "/img.shop/shop.cup4.jpeg",
      },
      {
        id: 18,
        name: "T-shirt Vintage Print",
        price: 29.99,
        oldPrice: 34.99,
        discount: 12,
        isNew: true,
        category: "tshirt",
        image: "/img.shop/shop.shirt5.jpeg",
      },
      {
        id: 19,
        name: "Tote Bag Summer Vibes",
        price: 17.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "tote",
        image: "/img.shop/shop.tote5.jpeg",
      },
      {
        id: 20,
        name: "Tazze Artistic Blue",
        price: 20.99,
        oldPrice: null,
        discount: 0,
        isNew: false,
        category: "tazze",
        image: "/img.shop/shop.cup5.jpeg",
      },
      {
        id: 21,
        name: "T-shirt Graphic Design",
        price: 24.99,
        oldPrice: 29.99,
        discount: 10,
        isNew: true,
        category: "tshirt",
        image: "/img.shop/shop.shirt6.jpeg",
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
