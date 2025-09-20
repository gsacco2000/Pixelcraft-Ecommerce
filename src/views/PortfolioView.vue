<template>
  <div>
    <main>
      <!-- Hero con slideshow -->
      <section class="hero">
        <div class="slideshow">
          <img
            src="/img.home/home.caffe.jpg"
            class="slide active"
            alt="Progetto Caffè"
          />
          <img
            src="/img.home/home.magazine.jpg"
            class="slide"
            alt="Progetto Magazine"
          />
          <img
            src="/img.home/home.opensound.jpg"
            class="slide"
            alt="Progetto OpenSound"
          />
          <img
            src="/img.home/home.primapower.jpg"
            class="slide"
            alt="Progetto PrimaPower"
          />
          <img
            src="/img.home/home.shampoo.jpg"
            class="slide"
            alt="Branding Shampoo Slide"
          />
        </div>
        <div class="hero-content">
          <h1>Portfolio</h1>
          <p>
            In ogni progetto mettiamo in campo creatività, competenze e
            strategia. Il nostro portfolio raccoglie una selezione di lavori che
            raccontano chi siamo: ogni brand, ogni sito, ogni campagna è frutto
            di una visione condivisa con il cliente e realizzata con cura
            artigianale.
          </p>
          <p>
            Dai rebranding aziendali ai lanci prodotto, dalla progettazione web
            alle produzioni multimediali, creiamo esperienze visive e
            comunicative che lasciano il segno. I nostri progetti spaziano tra
            settori industriali, moda, cultura ed eventi, dimostrando
            versatilità e attenzione ai dettagli.
          </p>
        </div>
      </section>

      <!-- Sezione Progetti -->
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
            <div class="project h-100 d-flex flex-column align-items-center">
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
                <a
                  v-if="project.link"
                  :href="project.link"
                  :aria-label="'vai al progetto ' + project.title"
                  class="text-decoration-none"
                >
                  {{ project.title }}
                </a>
                <span v-else class="fw-bold fs-5">{{ project.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <AppNewsletter />
    </main>
  </div>
</template>

<script>
import AppNewsletter from "@/components/AppNewsletter.vue";

export default {
  name: "PortfolioView",
  components: {
    AppNewsletter,
  },
  data() {
    return {
      projects: [
        {
          title: "ISI Foundation",
          img: "/img.portfolio/portfolio.isiFoundation.jpg",
          alt: "ISI Foundation",
          description:
            "Un sistema grafico dinamico per il rebranding di un centro di ricerca scientifica.",
          link: "case_isifoundation.html",
        },
        {
          title: "Open Sound Festival",
          img: "/img.portfolio/portfolio.openSoundFestival.jpg",
          alt: "Open Sound Festival",
          description:
            "Una campagna manifesto per un’esperienza di land music.",
          link: "case_musicsound.html",
        },
        {
          title: "Tablì Lavazza",
          img: "/img.portfolio/portfolio.tabli.jpg",
          alt: "Tablì Lavazza",
          description: "Una tab al 100% di caffè, il futuro nella tazzina.",
          link: null,
        },
        {
          title: "Abbonamento Musei",
          img: "/img.portfolio/portfolio.abbonamentoMusei.jpg",
          alt: "Abbonamento Musei",
          description: "Una nuova identità per il museo più grande d’Italia.",
          link: null,
        },
        {
          title: "La Venaria Reale",
          img: "/img.portfolio/portfolio.laVenariaReale.jpg",
          alt: "La Venaria Reale",
          description: "La Reggia si apre a una naturale evoluzione visiva.",
          link: null,
        },
        {
          title: "Tenderly",
          img: "/img.portfolio/portfolio.tenderly.jpg",
          alt: "Tenderly",
          description:
            "La nuova campagna sull’importanza della tenerezza nella vita di tutti i giorni.",
          link: null,
        },
        {
          title: "Zignone",
          img: "/img.portfolio/portfolio.zignone.jpg",
          alt: "Zignone",
          description:
            "Una campagna in campagna per il futuro di un lanificio biellese.",
          link: null,
        },
        {
          title: "Effetto Piemonte",
          img: "/img.portfolio/portfolio.effettoPiemonte.jpg",
          alt: "Effetto Piemonte",
          description:
            "Un progetto visivo per raccontare un territorio in grafica.",
          link: null,
        },
        {
          title: "Officina Bontà",
          img: "/img.portfolio/portfolio.officinaBonta.jpg",
          alt: "Officina Bontà",
          description:
            "Il bio, buono e bello. Dal nome al pack, una nuova marca.",
          link: null,
        },
      ],
    };
  },
  mounted() {
    const projects = this.$el.querySelectorAll(".project");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(projects).indexOf(entry.target);
            const delay = (index % 3) * 100 + Math.floor(index / 3) * 150;
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    projects.forEach((project) => observer.observe(project));
  },
};
</script>

<style scoped>
.portfolio-header {
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: var(--padding-large, 3rem);
  padding-bottom: var(--padding-large, 3rem);
  padding-left: var(--padding-small, 1rem);
}

/* Griglia portfolio gestita da Bootstrap: elimina il CSS griglia custom */

/* Ogni progetto */
.project {
  height: 100%;
  opacity: 0;
  transform: translateY(40px) scale(0.94);
  transition: opacity 1s ease, transform 1s ease;
}

/* Quando diventa visibile */
.project.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Wrapper immagine e overlay */
.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
}

/* Immagine progetto */
.project img {
  width: 100%;
  display: block;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 0.3rem;
}

/* Overlay */
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
  padding: var(--padding-small, 1rem);
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  pointer-events: none;
  z-index: 2;
}

.overlay div {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}

/* Hover overlay e zoom immagine */
.project-image-wrapper:hover .overlay {
  opacity: 1;
  transform: scale(1);
}

.project-image-wrapper:hover img {
  transform: scale(1.1);
  filter: blur(2px) brightness(0.8);
}

/* Titolo progetto */
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
