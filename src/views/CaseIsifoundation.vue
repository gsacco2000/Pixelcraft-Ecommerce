<template>
  <div>
    <main class="container casestudy-container py-4">
      <!-- Immagine di copertina -->
      <img
        src="/img.case_isifoundation/casestudy.isifoundation.cover.jpg"
        alt="Isi Foundation"
        class="cover-image img-fluid mb-4"
      />

      <!-- Sezione case study -->
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

      <!-- KPI Section -->
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

      <!-- Sezione Progetti correlati -->
      <ProjectList :projects="relatedProjects" />
    </main>

    <!-- Newsletter a tutta larghezza -->
    <div class="newsletter-fullwidth" style="margin-top: 0; margin-bottom: 0">
      <AppNewsletter />
    </div>
  </div>
</template>

<script>
import AppNewsletter from "@/components/AppNewsletter.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "CaseIsifoundation",
  components: { AppNewsletter, ProjectList },
  data() {
    return {
      relatedProjects: [
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
      ],
    };
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
};
</script>

<style scoped>
.casestudy-container {
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 24px 0 rgba(50, 50, 93, 0.07),
    0 1.5px 10px 0 rgba(0, 0, 0, 0.12);
}

.cover-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.case-study .meta {
  font-size: 1rem;
  color: #5c5e62;
}

.case-study .tag {
  display: inline-block;
  background: #e9ecef;
  padding: 0.4em 0.9em;
  border-radius: 1em;
  color: #444;
  font-size: 0.95em;
}

.project-heading {
  font-weight: 600;
  line-height: 1.18;
}

@media (min-width: 768px) {
  .project-heading {
    font-size: 2.1rem;
  }
}

.kpi-box {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 10px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.15s;
}

.kpi-box:hover {
  box-shadow: 0 2px 16px 2px rgba(72, 84, 96, 0.13);
}

.kpi-value {
  color: #3f79ad;
}

.kpi-label {
  font-size: 1rem;
  color: #283046;
}

/* Newsletter full width */
:deep(.newsletter-fullwidth) {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: 0;
  padding-right: 0;
  background: #fff;
}

/* Remove margin bottom */
.keep-in-touch {
  margin-bottom: 0;
}

@media (max-width: 575px) {
  .casestudy-container {
    padding: 0.5rem;
  }

  .project-heading {
    font-size: 1.1rem;
  }

  .kpi-box {
    min-height: 100px;
  }
}
</style>
