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
        <ProjectList :projects="projects" />
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
              <router-link to="#" class="button mt-auto"
                >Continua a leggere</router-link
              >
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
              <router-link to="#" class="button mt-auto"
                >Continua a leggere</router-link
              >
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="articolo">
              <img
                src="/img.journal/journalarticolo_packaging.png"
                alt="Packaging"
                class="img-fluid rounded mb-2"
              />
              <p class="genere"><span class="design">DESIGN</span></p>
              <p class="info mb-2">APRIL 04 2025 | JESSICA SCANO</p>
              <h3 class="fw-bold lh-base">
                Packaging narrativo: sperimentazione in Val Varaita
              </h3>
              <router-link to="#" class="button mt-auto"
                >Continua a leggere</router-link
              >
            </div>
          </div>
        </section>
      </div>

      <AppNewsletter />
    </main>
  </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import AppNewsletter from "@/components/AppNewsletter.vue";

export default {
  name: "HomeView",
  components: { ProjectList, AppNewsletter },
  data() {
    return {
      projects: [
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
};
</script>

<style>
:root {
  --skin-color: #d7bfa8;
  --background: #212429;
  --text: #222222;
}

.hero {
  background: var(--background);
  color: white;
  padding: 2rem 0 1rem 0;
  position: relative;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 2.5rem 1rem 0 1rem;
}

.pixel {
  color: var(--skin-color);
  font-weight: bold;
}

#linea_curva::after {
  display: none;
}

@media (min-width: 768px) {
  #linea_curva {
    display: inline-block;
    position: relative;
  }

  #linea_curva::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 20px;
    left: -10px;
    width: calc(100% + 20px);
    height: 10px;
    background-color: var(--skin-color);
    z-index: -1;
    border-radius: 20px 10px / 10px 20px;
  }
}

.slideshow {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 2rem;
}

.slide {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  opacity: 0.7;
  transition: opacity 0.3s;
}

.slide.active {
  opacity: 1;
  border: 2px solid var(--skin-color);
}

.about-section {
  background-color: var(--skin-color);
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
  color: var(--background);
}

.about-italic {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.2rem;
}

.portfolio-section {
  background: var(--background);
  border-radius: 0.3rem;
  color: var(--text);
}

.portfolio-header {
  font-size: 2rem;
}

@media (min-width: 768px) {
  .portfolio-header {
    font-size: 2.2rem;
  }
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

.sectionsContainer {
  max-width: 1200px;
  margin: auto;
  padding: 1.2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
  background: var(--background);
  border-radius: 1rem;
}

.journal-header {
  font-size: 2rem;
}

@media (max-width: 767px) {
  .sectionsContainer {
    padding: 0.8rem;
    border-radius: 0.7rem;
  }
  .journal-header {
    font-size: 1.5rem;
  }
  .articolo {
    margin-bottom: 1rem;
  }
}

.articoliCorrelati {
  margin-top: 0.5rem;
}

.articolo {
  background: #f9f9f9;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.articolo h3 {
  font-size: 1.2rem;
  color: black;
}

.articolo img {
  width: 100%;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
}

.genere span {
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.85rem;
}

.territoriale {
  background-color: #e3d5ca;
  color: black;
}

.travel {
  background-color: #afedbe;
  color: black;
}

.design {
  background-color: #ffd3a5;
  color: black;
}

.info {
  color: #c7c7c7;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.button {
  background-color: var(--skin-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  width: max-content;
  text-align: center;
  transition: background-color 0.3s ease;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
}

.button:hover {
  background-color: black;
}

.keep-in-touch {
  background: var(--skin-color);
}

.project {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.project.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-white {
  color: #fff !important;
}
</style>
