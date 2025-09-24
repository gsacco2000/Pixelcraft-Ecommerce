<template>
  <main class="container-fluid">
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

  <div class="container pb-3">
    <div class="row row-cols-2 row-cols-lg-4 g-3">
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center px-2"
        >
          TUTTI
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          FOOD & BEVERAGE
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          TRAVEL & IDENTITY
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          DESIGN
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          COMMUNITY DESIGN
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          SUSTAINABILITY
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          GRAPHIC DESIGN
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          BRANDING TERRITORIALE
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          CULTURA LOCALE
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          SPAZIO PUBBLICO
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          VISUAL COMMUNICATION
        </div>
      </div>
      <div class="col">
        <div
          class="bg-light rounded text-center w-100 h-100 d-flex justify-content-center align-items-center py-3 px-2"
        >
          VISUAL STORYTELLING
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid my-4">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_materieprime.png"
            class="card-img-top"
            alt="Foto di cipolle rosse"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-primary">FOOD & BEVERAGE</span>
              <span class="badge bg-danger">VISUAL STORYTELLING</span>
              <h5 class="card-title mt-3">
                Materie prime e identità locale: un racconto visivo per il
                Piemonte rurale
              </h5>
              <p class="text-muted">MAY 02 2025 | PIETRO SALCIARINI</p>
            </div>
            <a
              href="articolo_materieprime.html"
              class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_nuovenarrazioni.png"
            class="card-img-top"
            alt="Ragazza in montagna"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-success">TRAVEL & IDENTITY</span>
              <h5 class="card-title mt-3">
                Nuove narrazioni per il turismo lento: un laboratorio tra
                grafica e territorio
              </h5>
              <p class="text-muted">APRIL 18 2025 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_packaging.png"
            class="card-img-top"
            alt="Vari tipi di imballaggi biologici per cibo e bevande"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-warning text-dark">DESIGN</span>
              <h5 class="card-title mt-3">
                Packaging narrativo per il biologico: una sperimentazione in Val
                Valaita
              </h5>
              <p class="text-muted">APRIL 04 2025 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_formazione.png"
            class="card-img-top"
            alt="Panorama montagna con lago"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-info text-dark">COMMUNITY DESIGN</span>
              <h5 class="card-title mt-3">
                Formazione e territorio: workshop per giovani comunicatori in
                Appennino
              </h5>
              <p class="text-muted">MARCH 22 2025 | GIULIA SACCO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_graficafiliere.png"
            class="card-img-top"
            alt="persone che fanno brainstorming su un grande foglio pieno di scritte"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-secondary">GRAPHIC DESIGN</span>
              <h5 class="card-title mt-3">
                Una grafica sistemica per le filiere: studio di identità visiva
                nel cuneese
              </h5>
              <p class="text-muted">MARCH 04 2025 | DAISY ROMANIELLO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_storieillustrate.png"
            class="card-img-top"
            alt="Copertina libro"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-success">SUSTAINABILITY</span>
              <span class="badge bg-success">TRAVEL IDENTITY</span>
              <h5 class="card-title mt-3">
                Storie illustrate per il clima: un progetto didattico nelle
                scuole di montagna
              </h5>
              <p class="text-muted">FEBRUARY 12 2025 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_identitavisiva.png"
            class="card-img-top"
            alt="Montagna innevata"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-warning text-dark"
                >BRANDING TERRITORIALE</span
              >
              <h5 class="card-title mt-3">
                Un'identità visiva per la montagna che cambia
              </h5>
              <p class="text-muted">FEBRUARY 01 2025 | GIULIA SACCO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_tipografia.png"
            class="card-img-top"
            alt="Grafica typography"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-secondary">CULTURA LOCALE</span>
              <span class="badge bg-secondary">GRAPHIC DESIGN</span>
              <h5 class="card-title mt-3">
                Tipografia come territorio: un carattere per le valli occitane
              </h5>
              <p class="text-muted">JANUARY 29 2025 | PIETRO SALCIARINI</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_segnaletica.png"
            class="card-img-top"
            alt="Borgo storico"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-info text-dark">SPAZIO PUBBLICO</span>
              <h5 class="card-title mt-3">
                Poster, pietra, pixel: segnaletica contemporanea per borghi
                storici
              </h5>
              <p class="text-muted">JANUARY 15 2025 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_graficaambiente.png"
            class="card-img-top"
            alt="Grafica informativa"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-primary">VISUAL COMMUNICATION</span>
              <span class="badge bg-secondary">CULTURA LOCALE</span>
              <h5 class="card-title mt-3">
                Grafica per l'ambiente: toolkit visivo per iniziative locali
              </h5>
              <p class="text-muted">DECEMBER 12 2024 | DAISY ROMANIELLO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_castelluccionorcia.png"
            class="card-img-top"
            alt="Campi di Castelluccio di Norcia"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-warning text-dark"
                >BRANDING TERRITORIALE</span
              >
              <h5 class="card-title mt-3">
                I colori del territorio: una palette per la comunicazione rurale
              </h5>
              <p class="text-muted">DECEMBER 04 2024 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
              >Continua a leggere</a
            >
          </div>
        </div>
      </div>
      <div class="col d-flex">
        <div class="card h-100 shadow-sm">
          <img
            src="/img.journal/journalarticolo_microeditoria.png"
            class="card-img-top"
            alt="Grafica cervello con schema"
          />
          <div class="card-body d-flex flex-column">
            <div>
              <span class="badge bg-info text-dark">SPAZIO PUBBLICO</span>
              <h5 class="card-title mt-3">
                Micro-editoria e territorio: il design delle storie locali
              </h5>
              <p class="text-muted">NOVEMBER 28 2024 | JESSICA SCANO</p>
            </div>
            <a href="#" class="btn btn-primary mt-auto w-100"
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
};
</script>

<style scoped></style>
