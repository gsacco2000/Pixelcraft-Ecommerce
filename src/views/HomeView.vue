<template>
  <div>
    <main>
      <section class="hero">
        <div class="slideshow">
          <img
            src="/img.home/home.caffe.jpg"
            class="slide active"
            alt="Caffè Slide"
          />
          <img
            src="/img.home/home.magazine.jpg"
            class="slide"
            alt="Magazine Slide"
          />
          <img
            src="/img.home/home.opensound.jpg"
            class="slide"
            alt="OpenSound Slide"
          />
          <img
            src="/img.home/home.primapower.jpg"
            class="slide"
            alt="PrimaPower Slide"
          />
          <img
            src="/img.home/home.shampoo.jpg"
            class="slide"
            alt="Branding Shampoo Slide"
          />
        </div>

        <div class="hero-content">
          <h1>
            Costruiamo esperienze che
            <span id="linea_curva">lasciano il segno</span>
          </h1>
          <p>
            Pixelcraft è l’agenzia di comunicazione che trasforma idee in
            strategie visive vincenti. Dal branding al digital marketing, diamo
            forma alla tua identità con creatività, precisione e passione.
          </p>
          <router-link
            to="/about"
            class="button"
            aria-label="Vai alla pagina about"
          >
            Conoscici
          </router-link>
        </div>
      </section>

      <section class="about-section text-white py-3 py-md-5 px-3 px-md-0">
        <div class="container about-content">
          <h2 class="fw-bold mb-3 mb-md-4">About Us</h2>
          <p class="fs-6 fs-md-5 lh-base">
            Siamo Pixel Craft, un'agenzia creativa fondata da Daisy Romaniello,
            Giulia Sacco, Pietro Salciarini e Jessica Scano.<br />
            Uniamo
            <span class="about-italic">strategia, visione e design,</span> dando
            forma a progetti di comunicazione consistenti e distintivi per
            supportare il percorso di crescita dei nostri partner e creare una
            connessione autentica e duratura con il loro pubblico.<br />
            Attivi da 15 anni in Italia e all'estero in tutti i settori, abbiamo
            maturato un'importante esperienza nell'industria meccanica di
            precisione, aerospaziale, metalmeccanica ed edile.
          </p>
        </div>
      </section>

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
                  <div>
                    Una nuova identità per il museo più grande d’Italia.
                  </div>
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

      <div class="sectionsContainer mx-auto py-3">
        <h2 class="journal-header fw-bold mb-3">Journal</h2>
        <section class="articoliCorrelati row g-4">
          <div class="col-12 col-md-4">
            <div class="articolo">
              <img
                src="/img.journal/journalarticolo_identitavisiva.png"
                alt="Montagna innevata"
                class="img-fluid rounded mb-2"
              />
              <p class="genere">
                <span class="territoriale">BRANDING TERRITORIALE</span>
              </p>
              <p class="info mb-2">FEBRUARY 01 2025 | GIULIA SACCO</p>
              <h3 class="fw-bold lh-base">
                Un'identità visiva per la montagna che cambia
              </h3>
              <router-link to="#" class="button mt-auto">
                Continua a leggere
              </router-link>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="articolo">
              <img
                src="/img.journal/journalarticolo_nuovenarrazioni.png"
                alt="Ragazza in montagna"
                class="img-fluid rounded mb-2"
              />
              <p class="genere">
                <span class="travel">TRAVEL &amp; IDENTITY</span>
              </p>
              <p class="info mb-2">APRIL 18 2025 | JESSICA SCANO</p>
              <h3 class="fw-bold lh-base">
                Narrazioni per il turismo lento: laboratorio tra grafica e
                territorio
              </h3>
              <router-link to="#" class="button mt-auto">
                Continua a leggere
              </router-link>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="articolo">
              <img
                src="/img.journal/journalarticolo_packaging.png"
                alt="Packaging"
                class="img-fluid rounded mb-2"
              />
              <p class="genere">
                <span class="design">DESIGN</span>
              </p>
              <p class="info mb-2">APRIL 04 2025 | JESSICA SCANO</p>
              <h3 class="fw-bold lh-base">
                Packaging narrativo: sperimentazione in Val Varaita
              </h3>
              <router-link to="#" class="button mt-auto">
                Continua a leggere
              </router-link>
            </div>
          </div>
        </section>
      </div>

      <section class="keep-in-touch w-100 py-5">
        <div class="container" style="max-width: 1200px">
          <div class="row align-items-center g-4">
            <div class="col-12 col-md-6 text-section">
              <h2 class="fw-bold">
                Costruiamo esperienze<br />
                che lasciano il segno,<br />
                <span class="pixel">un pixel alla volta.</span>
              </h2>
              <h3 class="subtitle mt-3 mb-4">
                Iscriviti alla nostra newsletter
              </h3>
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
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
