<template>
  <div>
    <main class="container casestudy-container py-4">
      <!-- Immagine di copertina -->
      <img
        src="/img.case_isifoundation/casestudy.isifoundation.cover.jpg"
        alt="Isi Foundation"
        class="cover-image img-fluid mb-4"
      />

      <!-- Sezione case study: struttura con flex responsivo -->
      <section class="case-study d-flex flex-column flex-md-row gap-4 mb-5">
        <div class="meta flex-shrink-0" style="width: 100%; max-width: 300px">
          <span class="year d-block fw-bold mb-2">2023</span>
          <span class="tag">BRANDING / DIGITAL / VISUAL IDENTITY</span>
        </div>
        <div class="content flex-grow-1">
          <h1 class="project-heading fs-3 fs-md-2 mb-3">
            ISI Foundation: un’identità visiva per la scienza dei dati al
            servizio del cambiamento
          </h1>
          <p>
            ISI Foundation, centro di ricerca scientifica riconosciuto in tutto
            il mondo per l’esperienza nella scienza dei dati applicata sui temi
            della salute pubblica e in altri campi di rilevanza collettiva,
            sceglie di farsi affiancare da Pixel Craft per costruire un’identità
            visiva in grado di raccontare il proprio approccio scientifico e
            innovativo.
          </p>
          <img
            src="/img.case_isifoundation/casestudy.isifoundation1.png"
            alt="Dettaglio visual del progetto"
            class="img-fluid my-3"
          />

          <p>
            Questa nuova identità si esprime in modo particolarmente efficace
            sui canali social, dove la varietà di combinazioni grafiche permette
            di raccontare con freschezza e immediatezza i progetti e le
            iniziative di ISI. Lo stesso approccio è stato portato sul sito web,
            che offre un'esperienza immersiva nel mondo della data science,
            delle pubblicazioni e delle attività del centro. In linea con la
            vision di ISI, il sito si distingue per il suo tono “pop” e
            accessibile, pensato per avvicinare un pubblico ampio alla cultura
            dei dati.
          </p>
          <img
            src="/img.case_isifoundation/casestudy.isifoundation2.jpg"
            alt="Secondo dettaglio visual del progetto"
            class="img-fluid my-3"
          />

          <p>
            Con questo progetto, Pixel Craft ha costruito una comunicazione che
            non solo rispecchia l’essenza di ISI Foundation, ma che è pronta a
            raccontare la sua evoluzione in modo sempre più dinamico e
            coinvolgente.
          </p>
        </div>
      </section>

      <!-- KPI Section: usando griglia Bootstrap -->
      <section class="kpi-section mb-5">
        <h2 class="mb-4">Risultati del progetto</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 text-center">
          <div class="col">
            <div class="kpi-box bg-light p-3 rounded shadow-sm">
              <div class="kpi-value display-5 fw-bold" data-target="25">0</div>
              <div class="kpi-label fs-6 text-dark mt-2">
                Crescita canali social
              </div>
            </div>
          </div>
          <div class="col">
            <div class="kpi-box bg-light p-3 rounded shadow-sm">
              <div class="kpi-value display-5 fw-bold" data-target="18">0</div>
              <div class="kpi-label fs-6 text-dark mt-2">
                Traffico su sito web
              </div>
            </div>
          </div>
          <div class="col">
            <div class="kpi-box bg-light p-3 rounded shadow-sm">
              <div class="kpi-value display-5 fw-bold" data-target="12">0</div>
              <div class="kpi-label fs-6 text-dark mt-2">
                Tempo medio sulla pagina
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <section
      class="portfolio-section mx-auto p-3 p-md-5"
      style="max-width: 1200px"
    >
      <h2 class="portfolio-header fw-bold mb-4">Progetti correlati</h2>
      <div class="row g-3">
        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3 position-relative">
              <img
                src="/img.portfolio/portfolio.tabli.jpg"
                alt="Tablì Lavazza"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>Una tab al 100% di caffè, il futuro nella tazzina.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5 text-center">
              Tablì Lavazza
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3 position-relative">
              <img
                src="/img.portfolio/portfolio.abbonamentoMusei.jpg"
                alt="Abbonamento Musei"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>Una nuova identità per il museo più grande d’Italia.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5 text-center">
              Abbonamento Musei
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3 position-relative">
              <img
                src="/img.portfolio/portfolio.laVenariaReale.jpg"
                alt="La Venaria Reale"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>La Reggia si apre a una naturale evoluzione visiva.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5 text-center">
              La Venaria Reale
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppNewsletter />
  </div>
</template>

<script>
import AppNewsletter from "@/components/AppNewsletter.vue";

export default {
  name: "CaseIsifoundation",
  components: {
    AppNewsletter,
  },
  mounted() {
    const counters = this.$el.querySelectorAll(".kpi-value");
    let hasAnimated = false;
    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = () => {
          const step = Math.ceil(target / 500);
          count += step;
          if (count < target) {
            counter.textContent = `+${count}%`;
            setTimeout(increment, 100);
          } else {
            counter.textContent = `+${target}%`;
          }
        };
        increment();
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    const kpiSection = this.$el.querySelector(".kpi-section");
    if (kpiSection) {
      observer.observe(kpiSection);
    }
  },
  methods: {
    toggleMenu() {
      // Implementa qui se serve
    },
    setActiveStyle() {
      // Implementa qui se serve
    },
  },
};
</script>

<style scoped>
.casestudy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--padding-large, 3rem);
}

.cover-image {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 2rem;
}

.case-study {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .case-study {
    flex-direction: row;
    align-items: flex-start;
  }
}

.meta {
  font-size: var(--font-p, 1rem);
  color: #666;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .meta {
    width: 30%;
    margin-bottom: 0;
  }
}

.year {
  display: block;
  font-weight: bold;
  margin-bottom: 0.7rem;
  color: var(--skin-color);
}

.tag {
  color: var(--text);
}

.content {
  width: 100%;
}

@media (min-width: 768px) {
  .content {
    width: 70%;
  }
}

.content img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

.kpi-section {
  margin-bottom: 4rem;
}

.kpi-box {
  background: var(--background, #f8f9fa);
  padding: var(--padding-small, 1rem);
  text-align: center;
  border-radius: 0.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.kpi-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--skin-color);
}

.kpi-label {
  margin-top: 0.5rem;
  font-size: var(--font-p, 1rem);
  color: #333;
}

.portfolio-header {
  max-width: 1200px;
}

.text-section h2,
.text-section h3 {
  margin: 0;
}
</style>
