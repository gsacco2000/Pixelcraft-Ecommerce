<template>
  <section class="article-section mx-auto p-3 p-md-5" style="max-width: 1200px">
    <h2 class="article-header fw-bold mb-4">Articoli</h2>
    <div class="row g-3">
      <div
        v-for="articolo in articoli"
        :key="articolo.id"
        class="col-12 col-md-4"
      >
        <div
          class="article h-100 d-flex flex-column align-items-center"
          :class="{ visible: visibleArticles.includes(articolo.id) }"
          ref="articleRefs"
          :data-id="articolo.id"
        >
          <div class="article-image-wrapper w-100 mb-3 position-relative">
            <img
              :src="articolo.img"
              :alt="articolo.alt"
              class="img-fluid rounded"
            />
            <div class="overlay">
              <div>
                <strong>Categorie:</strong>
                {{ articolo.categorie.join(", ") }}
              </div>
            </div>
          </div>
          <div class="article-title fs-5">
            <router-link
              v-if="articolo.link && articolo.link !== '#'"
              :to="articolo.link"
              :aria-label="'vai all\'articolo ' + articolo.titolo"
              class="text-decoration-none"
            >
              {{ articolo.titolo }}
            </router-link>
            <span v-else class="fw-bold fs-5">{{ articolo.titolo }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    articoli: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visibleArticles: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      const options = { threshold: 0.2 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const articleId = Number(entry.target.getAttribute("data-id"));
            if (!this.visibleArticles.includes(articleId)) {
              this.visibleArticles.push(articleId);
            }
            observer.unobserve(entry.target);
          }
        });
      }, options);

      if (Array.isArray(this.$refs.articleRefs)) {
        this.$refs.articleRefs.forEach((el) => {
          observer.observe(el);
        });
      } else if (this.$refs.articleRefs) {
        observer.observe(this.$refs.articleRefs);
      }
    });
  },
};
</script>

<style scoped>
.article {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.article.visible {
  opacity: 1;
  transform: translateY(0);
}

.article-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
}

.article img {
  width: 100%;
  display: block;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 0.3rem;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  pointer-events: none;
  z-index: 2;
}

.overlay div {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

.article-image-wrapper:hover .overlay {
  opacity: 1;
  transform: scale(1);
}

.article-image-wrapper:hover img {
  transform: scale(1.1);
  filter: blur(2px) brightness(0.8);
}

.article-title,
.article-title a {
  color: var(--text);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  text-decoration: none;
}

.article-title a:hover {
  font-style: italic;
  color: var(--text);
}
</style>
