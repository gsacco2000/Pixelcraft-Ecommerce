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
        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3">
              <img
                src="/img.portfolio/portfolio.tabli.jpg"
                alt="Tablì Lavazza"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>Una tab al 100% di caffè, il futuro nella tazzina.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5">Tablì Lavazza</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3">
              <img
                src="/img.portfolio/portfolio.abbonamentoMusei.jpg"
                alt="Abbonamento Musei"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>Una nuova identità per il museo più grande d’Italia.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5">Abbonamento Musei</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="project h-100 d-flex flex-column align-items-center">
            <div class="project-image-wrapper w-100 mb-3">
              <img
                src="/img.portfolio/portfolio.laVenariaReale.jpg"
                alt="La Venaria Reale"
                class="img-fluid rounded"
              />
              <div class="overlay">
                <div>La Reggia si apre a una naturale evoluzione visiva.</div>
              </div>
            </div>
            <div class="project-title fw-bold fs-5">La Venaria Reale</div>
          </div>
        </div>
      </div>
    </section>

    <!-- KEEP IN TOUCH SECTION - FORM DI CONTATTO -->
    <section class="keep-in-touch w-100 py-5">
      <div class="container" style="max-width: 1200px">
        <div class="row align-items-center g-4">
          <div class="col-12 col-md-6 text-section">
            <h2 class="fw-bold">
              Costruiamo esperienze<br />
              che lasciano il segno,<br />
              <span class="pixel">un pixel alla volta.</span>
            </h2>
            <h3 class="subtitle mt-3 mb-4">Iscriviti alla nostra newsletter</h3>
          </div>
          <div class="col-12 col-md-6">
            <form
              class="form-section bg-light bg-opacity-10 rounded-4 p-4"
              method="post"
            >
              <div class="row g-3">
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Nome"
                    autocomplete="given-name"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="surname"
                    name="surname"
                    required
                    placeholder="Cognome"
                    autocomplete="family-name"
                  />
                </div>
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    autocomplete="email"
                  />
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-outline-light fw-bold py-2 px-4"
                  >
                    Iscriviti
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "OpenSoundFestival",
  methods: {
    scrollNextSection() {
      // Scroll alla sezione successiva
      const sections = document.querySelectorAll("main > section");
      const scrollPosition = window.scrollY;
      for (let section of sections) {
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
  z-index: 1030; /* Bootstrap modal/offcanvas z-index */
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

.info-icon {
  z-index: 1031;
}

/* Optional: elimina border/caption della tabella se vuoi solo testo */
table caption {
  font-size: 1rem;
  font-weight: 600;
  color: #b3b3b3;
  display: none;
}

table .titolo {
  background-color: var(--skin-color);
}

.caption-box {
  width: 100%;
  max-width: 96vw;
}

@media (min-width: 576px) {
  .caption-box {
    max-width: 420px;
  }
}
@media (min-width: 768px) {
  .caption-box {
    max-width: 500px;
  }
}
@media (min-width: 1200px) {
  .caption-box {
    max-width: 560px;
  }
}

.offcanvas-title {
  font-weight: bold;
  color: var(--skin-color);
}

.offcanvas-body,
.offcanvas-header {
  background-color: var(--background);
  padding-right: 2rem;
}

.btn-close {
  background-color: var(--skin-color);
  font-size: 1rem;
}

.offcanvas-body p,
caption {
  color: var(--text);
}

.info-icon-custom {
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center; /* centro orizzontale */
  align-items: center; /* centro verticale */
  border: none;
  border-radius: 50%;
  background: var(--skin-color);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 0;
  margin: 0; /* reset margine */
  line-height: 0; /* reset line-height */
  overflow: visible;
  z-index: 1031;
}

.info-icon-custom i {
  color: white;
  font-size: 1.7rem;
  margin: 0; /* reset margine */
  padding: 0; /* reset padding */
  display: block;
  line-height: 1;
}

/* Portfolio */

/* Sezione PORTFOLIO */
.portfolio-section {
  background: var(--background);
  border-radius: 0.3rem;
  color: (--text);
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

/* Sezione finale */
.keep-in-touch .text-section {
  padding: var(--padding-medium);
}

/* Media queries */
@media (min-width: 768px) {
  .caption {
    max-width: 35%;
    font-size: var(--font-p);
  }

  .close-btn {
    font-size: 28px;
  }

  .title h1 {
    font-size: 2.5rem;
  }
}
</style>
