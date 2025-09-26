<template>
  <nav :class="['catalog-nav', { sticky: isSticky }]">
    <div class="search-wrapper">
      <input
        :value="searchTerm"
        placeholder="Cerca un articolo…"
        @input="onSearch"
        class="search-bar"
      />
      <span class="search-icon"><font-awesome-icon icon="search" /></span>
    </div>
    <div class="nav-categories">
      <button @click="goToShop" class="cat-btn">Shop</button>
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectCategory(cat)"
        :class="['cat-btn', { active: cat === selectedCategory }]"
      >
        {{ cat === "all" ? "Tutti i prodotti" : cat }}
      </button>
    </div>
    <div class="nav-icons">
      <button class="icon-btn" @click="onFavsClick" aria-label="Preferiti">
        <font-awesome-icon icon="heart" class="fav-icon" />
        <span v-if="favoritesCount > 0" class="nav-badge">{{
          favoritesCount
        }}</span>
      </button>
      <button class="icon-btn" @click="onCartClick" aria-label="Carrello">
        <font-awesome-icon icon="shopping-cart" class="cart-icon" />
        <span v-if="cartCount > 0" class="nav-badge">{{ cartCount }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "CatalogNavBar",
  data() {
    return {
      categories: ["all", "poster", "tote", "tazze", "tshirt"],
      isSticky: false,
      originalOffsetTop: 0,
    };
  },
  computed: {
    ...mapState(["searchTerm", "selectedCategory"]),
    ...mapGetters(["cartCount", "favoritesCount"]),
  },
  mounted() {
    this.originalOffsetTop = this.$el.offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["setSearchTerm", "setSelectedCategory"]),
    onSearch(event) {
      this.setSearchTerm(event.target.value);
    },
    goToShop() {
      this.setSelectedCategory("");
      this.$router.push({ name: "Shop" });
    },
    selectCategory(cat) {
      if (cat === "all") {
        this.setSelectedCategory("");
      } else {
        this.setSelectedCategory(cat);
      }
      this.$router.push({ name: "FilteredCatalog" });
    },
    onFavsClick() {
      this.$router.push({ name: "Favorites" });
    },
    onCartClick() {
      this.$router.push({ name: "Cart" });
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      this.isSticky = scrollTop > this.originalOffsetTop;
    },
  },
};
</script>

<style scoped>
.catalog-nav {
  background: var(--skin-color);
  padding: 1rem 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: stretch;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.catalog-nav.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  background: var(--skin-color);
}

@media (max-width: 699px) {
  .catalog-nav.sticky {
    position: static;
  }
}

.search-wrapper {
  position: relative;
  width: 100%;
}
.search-bar {
  width: 100%;
  border-radius: 2rem;
  border: 1px solid #e0e0e0;
  padding: 0.53rem 2.2rem 0.53rem 1rem;
  font-size: 1rem;
  outline: none;
  background: #faf9f7;
}
.search-icon {
  position: absolute;
  right: 12px;
  top: 0.7rem;
  font-size: 1.1rem;
  color: #bbb;
}
.nav-categories {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.cat-btn {
  background: #f5f5f5;
  border-radius: 2rem;
  border: none;
  padding: 0.44rem 1.08rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  color: #444;
  transition: background 0.2s, color 0.2s;
}
.cat-btn.active,
.cat-btn:hover {
  background: #151515;
  color: #fff;
}
.nav-icons {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
.icon-btn {
  background: none;
  border: none;
  font-size: 1.65rem;
  position: relative;
  padding: 0.1em 0.2em;
  cursor: pointer;
  margin-left: 0.35em;
  margin-right: 0.35em;
}
.fav-icon {
  color: #e24e63;
}
.cart-icon {
  color: #fff;
}
.nav-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #151515;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15em 0.3em;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  box-sizing: border-box;
}

@media (min-width: 700px) {
  .catalog-nav {
    flex-direction: row;
    align-items: center;
    padding: 1.1rem 2.2rem;
    gap: 1rem;
  }
  .search-wrapper {
    flex: 1 1 240px;
    max-width: 350px;
  }
  .nav-categories {
    flex: 2 1 auto;
    justify-content: center;
  }
  .nav-icons {
    justify-content: flex-end;
    margin-top: 0;
  }
}
</style>
