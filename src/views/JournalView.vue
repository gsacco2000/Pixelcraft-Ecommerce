<template>
  <main class="container">
    <div class="row g-0 align-items-stretch">
      <section class="col-lg-9 d-flex flex-column">
        <h2 class="m-3 flex-shrink-0">Articoli recenti</h2>
        <div class="d-flex overflow-auto gap-3 flex-grow-1">
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_materieprime.png"
              alt="Foto di cipolle rosse"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Materie prime e identità locale: un racconto visivo per il
              Piemonte rurale
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <router-link
                to="/articolomaterieprime"
                class="btn btn-primary p-1 fw-bold"
              >
                Continua a leggere
              </router-link>
            </div>
          </article>
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_nuovenarrazioni.png"
              alt="Ragazza in montagna"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Nuove narrazioni per il turismo lento: un laboratorio tra grafica
              e territorio
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <a href="#" class="btn btn-primary p-1 fw-bold"
                >Continua a leggere</a
              >
            </div>
          </article>
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_packaging.png"
              alt="Vari tipi di imballaggi biologici per cibo e bevande"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Packaging narrativo per il biologico: una sperimentazione in Val
              Valaita
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <a href="#" class="btn btn-primary p-1 fw-bold"
                >Continua a leggere</a
              >
            </div>
          </article>
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_formazione.png"
              alt="Panorama montagna con lago"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Formazione e territorio: workshop per giovani comunicatori in
              Appennino
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <a href="#" class="btn btn-primary p-1 fw-bold"
                >Continua a leggere</a
              >
            </div>
          </article>
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_graficafiliere.png"
              alt="persone che fanno brainstorming su un grande foglio pieno di scritte"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Una grafica sistemica per le filiere corte: studio di identità
              visiva nel cuneese
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <a href="#" class="btn btn-primary p-1 fw-bold"
                >Continua a leggere</a
              >
            </div>
          </article>
          <article class="card mb-5" style="min-width: 270px">
            <img
              src="/img.journal/journalarticolo_storieillustrate.png"
              alt="Copertina libro"
              class="img-fluid rounded mb-1"
            />
            <h5 class="card-title p-2">
              Storie illustrate per il clima: un progetto didattico nelle scuole
              di montagna
            </h5>
            <div class="mt-auto ms-2 mb-3">
              <a href="#" class="btn btn-primary p-1 fw-bold"
                >Continua a leggere</a
              >
            </div>
          </article>
        </div>
      </section>

      <aside
        class="col-lg-3 d-none d-lg-flex flex-column rounded-start overflow-auto bg-info p-3 my-4"
        style="max-height: 450px; background-color: rgb(7, 182, 250)"
      >
        <h3 class="fw-bold mb-3">Potrebbe interessarti anche:</h3>
        <div class="d-flex flex-column gap-3">
          <router-link
            to="/articolomaterieprime"
            class="d-flex align-items-start text-decoration-none text-dark"
          >
            <img
              src="/img.journal/journalarticolo_materieprime.png"
              alt="Foto di cipolle rosse"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">8 min</small>
              <h6 class="mb-0 fw-semibold">
                Materie prime e identità locale: un racconto visivo per il
                Piemonte rurale
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </router-link>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_nuovenarrazioni.png"
              alt="Ragazza in montagna"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">5 min</small>
              <h6 class="mb-0 fw-semibold">
                Nuove narrazioni per il turismo lento: un laboratorio tra
                grafica e territorio
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_packaging.png"
              alt="Vari tipi di imballaggi biologici per cibo e bevande"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">7 min</small>
              <h6 class="mb-0 fw-semibold">
                Packaging narrativo per il biologico: una sperimentazione in Val
                Valaita
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_formazione.png"
              alt="Panorama montagna con lago"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">6 min</small>
              <h6 class="mb-0 fw-semibold">
                Formazione e territorio: workshop per giovani comunicatori in
                Appennino
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_graficafiliere.png"
              alt="persone che fanno brainstorming su un grande foglio pieno di scritte"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">10 min</small>
              <h6 class="mb-0 fw-semibold">
                Una grafica sistemica per le filiere: studio di identità visiva
                nel cuneese
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_storieillustrate.png"
              alt="Copertina libro"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">9 min</small>
              <h6 class="mb-0 fw-semibold">
                Storie illustrate per il clima: un progetto didattico nelle
                scuole di montagna
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_identitavisiva.png"
              alt="Montagna innevata"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">5 min</small>
              <h6 class="mb-0 fw-semibold">
                Un'identità visiva per la montagna che cambia
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_tipografia.png"
              alt="Grafica typography"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">7 min</small>
              <h6 class="mb-0 fw-semibold">
                Tipografia come territorio: un carattere per le valli occitane
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_segnaletica.png"
              alt="Borgo storico"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">6 min</small>
              <h6 class="mb-0 fw-semibold">
                Poster, pietra, pixel: segnaletica contemporanea per borghi
                storici
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
          <div class="d-flex align-items-start">
            <img
              src="/img.journal/journalarticolo_graficaambiente.png"
              alt="Copertina libro"
              width="50"
              class="me-3 rounded"
            />
            <div>
              <small class="d-block mb-1">11 min</small>
              <h6 class="mb-0 fw-semibold">
                Grafica per l'ambiente: toolkit visivo per iniziative locali
              </h6>
              <p class="fst-italic mb-0" style="font-size: 0.75rem">
                2025, Pietro Salciarini
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </main>

  <br /><br /><br />

  <h2 class="text-center pb-3">Tutti gli articoli</h2>

  <div id="app">
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
  </div>

  <div class="container-fluid my-4">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex" v-for="art in articoliFiltrati" :key="art.id">
        <div class="card h-100 shadow-sm">
          <img :src="art.img" class="card-img-top" :alt="art.alt" />
          <div class="card-body d-flex flex-column">
            <div>
              <span
                v-for="cat in art.categorie"
                :key="cat"
                class="badge me-1"
                :class="badgeClass(cat)"
                >{{ cat }}</span
              >
              <h5 class="card-title mt-3">{{ art.titolo }}</h5>
              <p class="text-muted">{{ art.data }} | {{ art.autore }}</p>
            </div>
            <a :href="art.link" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalView",
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
          link: "articolo_materieprime.html",
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
        },
      ],
    };
  },
  computed: {
    articoliFiltrati() {
      if (this.categoriaSelezionata === "TUTTI") return this.articoli;
      return this.articoli.filter((a) =>
        a.categorie.includes(this.categoriaSelezionata)
      );
    },
  },
  methods: {
    badgeClass(cat) {
      const map = {
        "FOOD & BEVERAGE": "bg-primary",
        "VISUAL STORYTELLING": "bg-danger",
        "TRAVEL & IDENTITY": "bg-success",
        DESIGN: "bg-warning text-dark",
        "COMMUNITY DESIGN": "bg-info text-dark",
        SUSTAINABILITY: "bg-success",
        "GRAPHIC DESIGN": "bg-secondary",
        "BRANDING TERRITORIALE": "bg-warning text-dark",
        "CULTURA LOCALE": "bg-secondary",
        "SPAZIO PUBBLICO": "bg-info text-dark",
        "VISUAL COMMUNICATION": "bg-primary",
      };
      return map[cat] || "bg-secondary";
    },
    setCategoria(cat) {
      this.categoriaSelezionata = cat;
    },
  },
};
</script>

<style scoped></style>
