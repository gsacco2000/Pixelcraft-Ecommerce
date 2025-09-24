<template>
  <section
    class="portfolio-section mx-auto p-3 p-md-5"
    style="max-width: 1200px"
  >
    <h2 class="portfolio-header fw-bold mb-4">Progetti</h2>
    <div class="row g-3">
      <div
        v-for="project in projects"
        :key="project.title"
        class="col-12 col-md-4"
      >
        <div
          class="project h-100 d-flex flex-column align-items-center"
          :class="{ visible: visibleProjects.includes(project.title) }"
          ref="projectRefs"
        >
          <div class="project-image-wrapper w-100 mb-3 position-relative">
            <img
              :src="project.img"
              :alt="project.alt"
              class="img-fluid rounded"
            />
            <div class="overlay">
              <div>{{ project.description }}</div>
            </div>
          </div>
          <div class="project-title fs-5">
            <router-link
              v-if="project.link"
              :to="project.link"
              :aria-label="'vai al progetto ' + project.title"
              class="text-decoration-none"
            >
              {{ project.title }}
            </router-link>
            <span v-else class="fw-bold fs-5">{{ project.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectList",
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visibleProjects: [],
    };
  },
  mounted() {
    // Fade-in progetti con Intersection Observer
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectTitle = entry.target
            .querySelector(".project-title, span, a")
            .textContent.trim();
          if (!this.visibleProjects.includes(projectTitle)) {
            this.visibleProjects.push(projectTitle);
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.$refs.projectRefs.forEach((el) => {
      observer.observe(el);
    });
  },
};
</script>

<style scoped>
.project {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.project.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
}

.project img {
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

.project-image-wrapper:hover .overlay {
  opacity: 1;
  transform: scale(1);
}

.project-image-wrapper:hover img {
  transform: scale(1.1);
  filter: blur(2px) brightness(0.8);
}

.project-title,
.project-title a {
  color: var(--text);
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  text-decoration: none;
}

.project-title a:hover {
  font-style: italic;
  color: var(--text);
}
</style>
