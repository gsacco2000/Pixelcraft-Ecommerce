<template>
  <section class="categories-section">
    <h2 class="categories-title">Esplora per categorie</h2>
    <div class="categories-list">
      <router-link
        v-for="cat in categories"
        :key="cat.name"
        :to="{ name: 'FilteredCatalog' }"
        class="category-item"
        @click="filtroCategoria(cat.label)"
      >
        <div class="category-image-wrapper">
          <img :src="cat.img" :alt="cat.name" class="category-image" />
        </div>
        <div class="category-label">{{ cat.label }}</div>
        <div class="category-count">{{ cat.count }} Products</div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "CategoriesSection",
  data() {
    return {
      categories: [
        {
          name: "posters",
          label: "poster",
          count: 17,
          img: "/img.shop/cat.poster.png",
        },
        {
          name: "tote bag",
          label: "tote",
          count: 6,
          img: "/img.shop/cat.tote.jpeg",
        },
        {
          name: "cup",
          label: "cup",
          count: 4,
          img: "/img.shop/cat.cup.jpeg",
        },
        {
          name: "t-shirt",
          label: "tee",
          count: 10,
          img: "/img.shop/cat.tee.jpeg",
        },
      ],
    };
  },
  methods: {
    filtroCategoria(label) {
      // Resetta la categoria nel Vuex store
      this.$store.commit("setSelectedCategory", label);
    },
  },
};
</script>

<style scoped>
.categories-section {
  background: white;
  text-align: center;
  padding: 2rem 1rem 3rem;
}
.categories-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.categories-subtitle {
  color: #757575;
  font-size: 1rem;
  margin-bottom: 2.1rem;
}
.categories-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  align-items: center;
}
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.1s;
}
.category-item:hover .category-label {
  font-style: italic;
  color: var(--skin-color);
}
.category-image-wrapper {
  background: #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  overflow: hidden;
  margin-bottom: 0.7rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
}
.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.category-label {
  font-weight: 600;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}
.category-label:hover {
  font-style: italic;
  color: var(--skin-color);
}
.category-count {
  font-size: 0.95rem;
  color: #8c8c8c;
}

/* Tablet e superiore */

@media (min-width: 600px) {
  .categories-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.8rem 2.2rem;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
