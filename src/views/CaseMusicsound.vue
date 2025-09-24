<template>
  <main>
    <!-- SEZIONE 1 -->
    <section
      class="vh-85 w-100 d-flex flex-column justify-content-end position-relative overflow-hidden"
    >
      <img
        src="/img.case_opensound/opensoud_poster.jpg"
        alt="poster creato da Pixelcraft per Open Sound Festival"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
      />
      <div
        class="position-relative z-1 p-4 bg-dark bg-opacity-75 text-light mb-4 ms-4 rounded caption-box"
      >
        <h1>Open Sound Festival</h1>
      </div>
      <div
        class="d-flex justify-content-center align-items-center mb-3 z-2 position-relative"
        @click="scrollNextSection"
        role="button"
        tabindex="0"
        @keydown.enter="scrollNextSection"
        aria-label="Scroll alla sezione successiva"
      >
        <i class="fas fa-chevron-down fs-2 text-white bounce"></i>
      </div>
    </section>

    <!-- SEZIONE 2 -->
    <section
      class="vh-85 w-100 d-flex flex-column justify-content-end position-relative overflow-hidden"
    >
      <img
        src="/img.case_opensound/opensoud_tote.jpg"
        alt="tote bag creata da Pixelcraft per Open Sound Festival"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
      />
      <div
        class="position-relative z-1 p-4 bg-dark bg-opacity-75 text-light mb-4 ms-4 rounded caption-box"
      >
        <h3>Valori</h3>
        <p>
          Il progetto valorizza l’identità visiva dell’edizione 2023 del
          festival, tenutosi a Matera e in altri luoghi della Basilicata, con
          artisti come Nu Genea, Jeff Mills e Ninos du Brasil. La campagna
          comunica i temi chiave del programma, rafforzando la visione di Open
          Sound in un panorama musicale molto competitivo.
        </p>
      </div>
    </section>

    <!-- SEZIONE 3 -->
    <section
      class="vh-85 w-100 d-flex flex-column justify-content-end position-relative overflow-hidden"
    >
      <img
        src="/img.case_opensound/opensoud_website.jpg"
        alt="sito web e applicazione creati da Pixelcraft per Open Sound Festival"
        class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0"
      />
      <div
        class="position-relative z-1 p-4 bg-dark bg-opacity-75 text-light mb-4 ms-4 rounded caption-box"
      >
        <h3>Processo creativo</h3>
        <p>
          Il festival, con le grafiche rosse di PixelCraft, riflette sul legame
          tra musica e territorio, proponendo una “land music” in cui il
          paesaggio fisico diventa paesaggio sonoro. Questo concept guida la
          comunicazione visiva e digitale, curata interamente da PixelCraft
          prima dell’evento.
        </p>
      </div>
    </section>

    <!-- ICONA INFO (OFFCANVAS BOOTSTRAP) -->
    <button
      class="info-icon-custom"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasInfo"
      aria-controls="offcanvasInfo"
      aria-label="Informazioni Open Sound Festival"
    >
      <i class="fas fa-info-circle"></i>
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasInfo"
      aria-labelledby="offcanvasInfoLabel"
    >
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasInfoLabel">
          Open Sound Festival
        </h2>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Chiudi"
        ></button>
      </div>

      <div class="offcanvas-body">
        <p>
          Nel panorama dei festival musicali italiani si impone un’esperienza di
          land music. Il legame tra suono e territorio, nell’immagine di
          Bellissimo per l’edizione 2025 del festival Open Sound a Matera.
        </p>

        <table class="table table-bordered align-middle table-light mt-3">
          <caption class="fw-semibold">
            Informazioni sul progetto
          </caption>
          <tbody>
            <tr>
              <th scope="row" class="w-25 titolo">Cliente</th>
              <td>Open Sound Festival - Comune di Matera</td>
            </tr>
            <tr>
              <th class="titolo" scope="row">Anno</th>
              <td>2025</td>
            </tr>
            <tr>
              <th class="titolo" scope="row">Servizi</th>
              <td>Branding, Web Design, Merchandising</td>
            </tr>
            <tr>
              <th class="titolo" scope="row">Durata</th>
              <td>4 mesi</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-3">
          Open Sound è un programma di esperienze musicali nato per fare
          incontrare i suoni della cultura popolare con le nuove forme di
          espressione. Lo studio ha accompagnato l&#8217;associazione
          organizzatrice in un percorso di revisione e consolidamento della
          comunicazione: la fase di branding ha aiutato a definire meglio le
          attività del team e i valori profondi su cui fondano entrambe. Open
          Sound vuole tornare al valore originario del rapporto con la musica,
          come racconta il motto <em>Reliving Origins</em> proposto da Pixel
          Craft.
        </p>
      </div>
    </div>

    <!-- PORTFOLIO -->
    <section
      class="portfolio-section mx-auto p-3 p-md-5"
      style="max-width: 1200px"
    >
      <h2 class="portfolio-header fw-bold mb-4">Portfolio</h2>
      <div class="row g-3">
        <ProjectList :projects="relatedProjects" />
      </div>
    </section>

    <!-- KEEP IN TOUCH SECTION - COMPONENTE NEWSLETTER -->
    <AppNewsletter />
  </main>
</template>

<script>
import AppNewsletter from "@/components/AppNewsletter.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "CaseMusicsound",
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
  methods: {
    scrollNextSection() {
      const sections = document.querySelectorAll("main > section");
      const scrollPosition = window.scrollY;
      for (const section of sections) {
        if (section.offsetTop > scrollPosition) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
          break;
        }
      }
    },
  },
};
</script>

<style scoped>
.vh-85 {
  height: 85vh;
}

.object-fit-cover {
  object-fit: cover;
}

.z-0 {
  z-index: 0;
}
.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
.z-3 {
  z-index: 1030;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.info-icon-custom {
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background: var(--skin-color);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 0;
  margin: 0;
  line-height: 0;
  overflow: visible;
  z-index: 1031;
}

.info-icon-custom i {
  color: white;
  font-size: 1.7rem;
  margin: 0;
  padding: 0;
  display: block;
  line-height: 1;
}

.portfolio-section {
  background: var(--background);
  border-radius: 0.3rem;
  color: var(--text);
}

.portfolio-header {
  font-size: 2rem;
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
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.4s, transform 0.4s;
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

.project-title {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
}

@media (min-width: 768px) {
  .portfolio-header {
    font-size: 2.2rem;
  }
}
</style>
