<template>
  <main>
    <section class="hero">
      <div class="slideshow">
        <img
          src="img/img.home/home.caffe.jpg"
          class="slide active"
          alt="Caffè Slide"
        />
        <img
          src="img/img.home/home.magazine.jpg"
          class="slide"
          alt="Magazine Slide"
        />
        <img
          src="img/img.home/home.opensound.jpg"
          class="slide"
          alt="OpenSound Slide"
        />
        <img
          src="img/img.home/home.primapower.jpg"
          class="slide"
          alt="PrimaPower Slide"
        />
        <img
          src="img/img.home/home.shampoo.jpg"
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
        <a class="button" href="about.html" aria-label="vai alla pagina about"
          >Conoscici</a
        >
      </div>
    </section>

    <section class="about-section text-white py-3 py-md-5 px-3 px-md-0">
      <div class="container about-content">
        <h2 class="fw-bold mb-3 mb-md-4">About Us</h2>
        <p class="fs-6 fs-md-5 lh-base">
          Siamo Pixel Craft, un'agenzia creativa fondata da Daisy Romaniello,
          Giulia Sacco, Pietro Salciarini e Jessica Scano.<br />
          Uniamo <span class="about-italic">strategia, visione e design</span>,
          dando forma a progetti di comunicazione consistenti e distintivi per
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
                src="img/img.portfolio/portfolio.tabli.jpg"
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
                src="img/img.portfolio/portfolio.abbonamentoMusei.jpg"
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
                src="img/img.portfolio/portfolio.laVenariaReale.jpg"
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
              src="img/img.journal/journalarticolo_identitavisiva.png"
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
            <a href="#" class="button mt-auto">Continua a leggere</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="articolo">
            <img
              src="img/img.journal/journalarticolo_nuovenarrazioni.png"
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
            <a href="#" class="button mt-auto">Continua a leggere</a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="articolo">
            <img
              src="img/img.journal/journalarticolo_packaging.png"
              alt="Packaging"
              class="img-fluid rounded mb-2"
            />
            <p class="genere"><span class="design">DESIGN</span></p>
            <p class="info mb-2">APRIL 04 2025 | JESSICA SCANO</p>
            <h3 class="fw-bold lh-base">
              Packaging narrativo: sperimentazione in Val Varaita
            </h3>
            <a href="#" class="button mt-auto">Continua a leggere</a>
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
  name: "HomeView",
  data() {
    return {
      menuActive: false,
      currentSlide: 0,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      const navLinks = this.$el.querySelector(".nav-links");
      const burgerMenu = this.$el.querySelector(".burger-menu");
      const closeMenu = this.$el.querySelector(".close-menu");
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("open");
      closeMenu.classList.toggle("active");
    },
    showNextSlide() {
      const slides = this.$el.querySelectorAll(".slide");
      slides.forEach((slide) => slide.classList.remove("active"));
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      slides[this.currentSlide].classList.add("active");
    },
    setupObservers() {
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

      window.addEventListener("scroll", () => {
        const infoIcon = this.$el.querySelector(".info-icon");
        const targetSection = this.$el.querySelector(".full-screen3");
        if (!infoIcon || !targetSection) return;
        const targetBottom =
          targetSection.offsetTop + targetSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        infoIcon.style.display =
          scrollPosition > targetBottom ? "none" : "block";
      });
    },
  },
  mounted() {
    setInterval(this.showNextSlide, 3000);
    this.setupObservers();
  },
};
</script>

<style scoped>
#linea_curva::after {
  display: none;
}

/* Sezione ABOUT */
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

/* Sezione PORTFOLIO */
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
