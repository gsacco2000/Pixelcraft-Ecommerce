<template>
  <section class="categories-section">
    <h2 class="categories-title">Esplora per categorie</h2>
    <div class="categories-list">
      <div v-for="cat in categories" :key="cat.name" class="category-item">
        <div class="category-image-wrapper">
          <img :src="cat.img" :alt="cat.name" class="category-image" />
        </div>
        <div class="category-label">{{ cat.label }}</div>
        <div class="category-count">{{ cat.count }} Products</div>
      </div>
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
          img: "https://i.pinimg.com/736x/56/0f/e7/560fe772b95eab5e57f1187c7a6b47fa.jpg",
        },
        {
          name: "tote bag",
          label: "tote",
          count: 6,
          img: "https://i.pinimg.com/736x/6c/8b/85/6c8b852b64001dc6d9b04c01ec7d6ad7.jpg",
        },
        {
          name: "cup",
          label: "cup",
          count: 4,
          img: "https://i.pinimg.com/736x/e1/6d/3b/e16d3b318668fa5e3a3f5df2b7061a60.jpg",
        },
        {
          name: "t-shirt",
          label: "tee",
          count: 10,
          img: "https://i.pinimg.com/736x/56/0f/e7/560fe772b95eab5e57f1187c7a6b47fa.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.categories-section {
  background: #faf9f7;
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
