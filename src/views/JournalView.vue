<template>
  <main class="container">
    <div class="row g-0 align-items-stretch">
      <section class="col-lg-9 d-flex flex-column">
        <h2 class="m-3 flex-shrink-0">Articoli recenti</h2>
        <div class="d-flex overflow-auto gap-3 flex-grow-1">
          <ArticleCard
            v-for="art in articoliRecenti"
            :key="art.id"
            :articolo="art"
          />
        </div>
      </section>

      <aside
        class="col-lg-3 d-none d-lg-flex flex-column rounded-start overflow-auto bg-info p-3 my-4"
        style="max-height: 450px; background-color: rgb(7, 182, 250)"
      >
        <h3 class="fw-bold mb-3">Potrebbe interessarti anche:</h3>
        <div class="d-flex flex-column gap-3">
          <template v-for="art in articoliAside" :key="art.id">
            <router-link
              v-if="art.link && art.link !== '#'"
              :to="art.link"
              class="text-decoration-none text-reset"
            >
              <ArticleCard
                :articolo="art"
                :showMinutiLettura="true"
                :minWidthStyle="{ minWidth: 'auto' }"
              />
            </router-link>
            <ArticleCard
              v-else
              :articolo="art"
              :showMinutiLettura="true"
              :minWidthStyle="{ minWidth: 'auto' }"
            />
          </template>
        </div>
      </aside>
    </div>

    <br /><br />

    <h2 class="text-center pb-3">Tutti gli articoli</h2>
    <div class="container pb-3">
      <div class="row row-cols-2 row-cols-lg-4 g-3">
        <div v-for="cat in categorie" :key="cat" class="col">
          <button
            @click="setCategoria(cat)"
            :class="[
              'btn',
              'w-100',
              'h-100',
              'd-flex',
              'justify-content-center',
              'align-items-center',
              'rounded',
              'text-center',
              'px-2',
              'bg-light',
              categoriaSelezionata === cat
                ? 'border border-primary fw-bold'
                : '',
              cat === 'TUTTI' ? 'py-0' : 'py-3',
            ]"
            style="white-space: normal; cursor: pointer"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>

    <div class="container-fluid my-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col d-flex" v-for="art in articoliFiltrati" :key="art.id">
          <ArticleCard :articolo="art" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";

export default {
  name: "JournalView",
  components: {
    ArticleCard,
  },
  data() {
    return {
      categoriaSelezionata: "TUTTI",
      categorie: [
        "TUTTI",
        "FOOD & BEVERAGE",
        "TRAVEL & IDENTITY",
        "DESIGN",
        "COMMUNITY DESIGN",
        "SUSTAINABILITY",
        "GRAPHIC DESIGN",
        "BRANDING TERRITORIALE",
        "CULTURA LOCALE",
        "SPAZIO PUBBLICO",
        "VISUAL COMMUNICATION",
        "VISUAL STORYTELLING",
      ],
      articoli: [
        {
          id: 1,
          img: "/img.journal/journalarticolo_materieprime.png",
          alt: "Foto di cipolle rosse",
          categorie: ["FOOD & BEVERAGE", "VISUAL STORYTELLING"],
          titolo:
            "Materie prime e identità locale: un racconto visivo per il Piemonte rurale",
          data: "MAY 02 2025",
          autore: "PIETRO SALCIARINI",
          link: "/articolomaterieprime",
          minutiLettura: 8,
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
        {
          id: 4,
          img: "/img.journal/journalarticolo_formazione.png",
          alt: "Panorama montagna con lago",
          categorie: ["COMMUNITY DESIGN"],
          titolo:
            "Formazione e territorio: workshop per giovani comunicatori in Appennino",
          data: "MARCH 22 2025",
          autore: "GIULIA SACCO",
          link: "#",
          minutiLettura: 6,
        },
        {
          id: 5,
          img: "/img.journal/journalarticolo_graficafiliere.png",
          alt: "persone che fanno brainstorming su un grande foglio pieno di scritte",
          categorie: ["GRAPHIC DESIGN"],
          titolo:
            "Una grafica sistemica per le filiere: studio di identità visiva nel cuneese",
          data: "MARCH 04 2025",
          autore: "DAISY ROMANIELLO",
          link: "#",
          minutiLettura: 10,
        },
        {
          id: 6,
          img: "/img.journal/journalarticolo_storieillustrate.png",
          alt: "Copertina libro",
          categorie: ["SUSTAINABILITY", "TRAVEL IDENTITY"],
          titolo:
            "Storie illustrate per il clima: un progetto didattico nelle scuole di montagna",
          data: "FEBRUARY 12 2025",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 9,
        },
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
          id: 8,
          img: "/img.journal/journalarticolo_tipografia.png",
          alt: "Grafica typography",
          categorie: ["CULTURA LOCALE", "GRAPHIC DESIGN"],
          titolo:
            "Tipografia come territorio: un carattere per le valli occitane",
          data: "JANUARY 29 2025",
          autore: "PIETRO SALCIARINI",
          link: "#",
          minutiLettura: 7,
        },
        {
          id: 9,
          img: "/img.journal/journalarticolo_segnaletica.png",
          alt: "Borgo storico",
          categorie: ["SPAZIO PUBBLICO"],
          titolo:
            "Poster, pietra, pixel: segnaletica contemporanea per borghi storici",
          data: "JANUARY 15 2025",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 6,
        },
        {
          id: 10,
          img: "/img.journal/journalarticolo_graficaambiente.png",
          alt: "Grafica informativa",
          categorie: ["VISUAL COMMUNICATION", "CULTURA LOCALE"],
          titolo:
            "Grafica per l'ambiente: toolkit visivo per iniziative locali",
          data: "DECEMBER 12 2024",
          autore: "DAISY ROMANIELLO",
          link: "#",
          minutiLettura: 11,
        },
        {
          id: 11,
          img: "/img.journal/journalarticolo_castelluccionorcia.png",
          alt: "Campi di Castelluccio di Norcia",
          categorie: ["BRANDING TERRITORIALE"],
          titolo:
            "I colori del territorio: una palette per la comunicazione rurale",
          data: "DECEMBER 04 2024",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 7,
        },
        {
          id: 12,
          img: "/img.journal/journalarticolo_microeditoria.png",
          alt: "Grafica cervello con schema",
          categorie: ["SPAZIO PUBBLICO"],
          titolo: "Micro-editoria e territorio: il design delle storie locali",
          data: "NOVEMBER 28 2024",
          autore: "JESSICA SCANO",
          link: "#",
          minutiLettura: 5,
        },
      ],
    };
  },
  computed: {
    articoliRecenti() {
      return this.articoli.slice(0, 6);
    },
    articoliAside() {
      return this.articoli.filter((art) => art.minutiLettura);
    },
    articoliFiltrati() {
      if (this.categoriaSelezionata === "TUTTI") return this.articoli;
      return this.articoli.filter((a) =>
        a.categorie.includes(this.categoriaSelezionata)
      );
    },
  },
  methods: {
    setCategoria(cat) {
      this.categoriaSelezionata = cat;
    },
  },
};
</script>
