<template>
  <nav class="catalog-nav">
    <div class="search-wrapper">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Cerca un articolo…"
        @input="onSearch"
        class="search-bar"
      />
      <span class="search-icon"><i class="bi bi-search"></i></span>
    </div>
    <div class="nav-categories">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectCategory(cat)"
        :class="['cat-btn', { active: cat === selectedCategory }]"
      >
        {{ cat }}
      </button>
    </div>
    <div class="nav-icons">
      <button class="icon-btn" @click="onFavsClick" aria-label="Preferiti">
        <i class="bi bi-heart fav-icon"></i>
        <span v-if="favsCount > 0" class="nav-badge">{{ favsCount }}</span>
      </button>
      <button class="icon-btn" @click="onCartClick" aria-label="Carrello">
        <i class="bi bi-cart cart-icon"></i>
        <span v-if="cartCount > 0" class="nav-badge">{{ cartCount }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CatalogNavBar",
  props: {
    favsCount: { type: Number, default: 0 },
    cartCount: { type: Number, default: 0 },
    initialCategory: { type: String, default: "poster" },
  },
  data() {
    return {
      searchTerm: "",
      selectedCategory: this.initialCategory,
      categories: ["poster", "tote", "tazze", "tshirt"],
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.searchTerm);
    },
    selectCategory(cat) {
      this.selectedCategory = cat;
      this.$emit("select-category", cat);
    },
    onFavsClick() {
      this.$emit("show-favorites");
    },
    onCartClick() {
      this.$emit("show-cart");
    },
  },
};
</script>

<style scoped>
.catalog-nav {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 8px 0 #eee;
  padding: 1rem 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: stretch;
}

/* SEARCH BAR */
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

/* CATEGORIES */
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
  background: #3733a7;
  color: #fff;
}

/* ICONS */
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
  color: #e24e63; /* rosso accesso/modern */
}
.cart-icon {
  color: #2aaf70; /* verde acceso */
}
.nav-badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background: #3733a7;
  color: #fff;
  font-size: 0.9em;
  font-weight: 700;
  padding: 0.09em 0.56em;
  border-radius: 1em;
}

/* Tablet/Desktop: più spazio e layout orizzontale */
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
