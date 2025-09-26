<template>
  <div>
    <main>
      <!-- Hero banner con componente HeroBanner -->
      <HeroBanner
        backgroundImage="/img.home/home.magazine.jpg"
        :title="`Costruiamo esperienze che lasciano il segno`"
        :description="`
          <p>Pixelcraft è l’agenzia di comunicazione che trasforma idee in
          strategie visive vincenti. Dal branding al digital marketing, diamo
          forma alla tua identità con creatività, precisione e passione.</p>
        `"
        height="650px"
      />

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

      <div
        class="portfolio-section mx-auto p-3 p-md-5"
        style="max-width: 1200px"
      >
        <ArticleList :articoli="selectedArticles" />
      </div>

      <AppNewsletter />
    </main>
  </div>
</template>

<script>
import HeroBanner from "@/components/HeroBanner.vue";
import ProjectList from "@/components/ProjectList.vue";
import AppNewsletter from "@/components/AppNewsletter.vue";
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "HomeView",
  components: {
    HeroBanner,
    ProjectList,
    AppNewsletter,
    ArticleList,
  },
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
      selectedArticles: [
        {
          id: 7,
          img: "/img.journal/journalarticolo_identitavisiva.png",
          alt: "Montagna innevata",
          categorie: ["BRANDING TERRITORIALE"],
          titolo: "Un'identità visiva per la montagna che cambia",
          data: "FEBRUARY 01 2025",
          autore: "GIULIA SACCO",
          link: "#",
          minutiLettura: 5,
        },
        {
          id: 2,
          img: "/img.journal/journalarticolo_nuovenarrazioni.png",
          alt: "Ragazza in montagna",
          categorie: ["TRAVEL & IDENTITY"],
          titolo:
            "Nuove narrazioni per il turismo lento: un laboratorio tra grafica e territorio",
          data: "APRIL 18 2025",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 5,
        },
        {
          id: 3,
          img: "/img.journal/journalarticolo_packaging.png",
          alt: "Vari tipi di imballaggi biologici per cibo e bevande",
          categorie: ["DESIGN"],
          titolo:
            "Packaging narrativo per il biologico: una sperimentazione in Val Valaita",
          data: "APRIL 04 2025",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 7,
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
/* Stile per il contenitore hero (modifiche per HeroBanner se usato) */
.hero-container {
  height: 650px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  box-sizing: border-box;
}

.overlay-box {
  max-width: 700px;
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

/* Portfolio section */
.portfolio-section {
  background: var(--background);
  border-radius: 0.3rem;
  color: var(--text);
}

/* Sections container */
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

/* Articolo list styling */
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

/* Responsive styles */
@media (max-width: 767px) {
  .hero-container {
    height: 450px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .overlay-box {
    max-width: 90%;
    padding: 1.5rem;
  }
  .overlay-box h1 {
    font-size: 2rem !important;
  }
  .overlay-box p {
    font-size: 1rem !important;
  }
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
</style>
